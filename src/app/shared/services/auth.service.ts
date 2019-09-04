import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { IFbLogin } from '../models/interfaces/fb-login.interface';
import { IUser } from '../models/interfaces/user.interface';

@Injectable()
export class AuthService {
    error$: Subject<string> = new Subject<string>();

    constructor(
        private http: HttpClient
    ) { }

    get token(): string {
        const expDate = new Date(localStorage.getItem('fb-token-exp'));

        if (new Date() > expDate) {
            this.logout();
            return null;
        }

        return localStorage.getItem('fb-token');
    }

    login(user: IUser): Observable<any> {
        user.returnSecureToken = true;

        return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword', user, {
            params: {
                key: environment.apiKey
            }
        })
        .pipe(
            tap(this.setToken),
            catchError(this.handlerErrors.bind(this))
        );
    }

    logout() {
        this.setToken(undefined);
    }

    isAuth(): boolean {
        return !!this.token;
    }

    private setToken(res: IFbLogin | undefined) {
        if (res) {
            const expDate = new Date(new Date().getTime() + +res.expiresIn * 1000);

            localStorage.setItem('fb-token', res.idToken);
            localStorage.setItem('fb-token-exp', expDate.toString());

            return;
        }

        localStorage.clear();
    }

    handlerErrors(error) {
        const { message } = error.error.error;

        switch (message) {
            case 'INVALID_EMAIL': {
                this.error$.next('INVALID_EMAIL');
                break;
            }
            case 'INVALID_PASSWORD': {
                this.error$.next('INVALID_EMAIL');
                break;
            }
            case 'EMAIL_NOT_FOUND': {
                this.error$.next('EMAIL_NOT_FOUND');
                break;
            }
        }

        return throwError(error);
    }
}
