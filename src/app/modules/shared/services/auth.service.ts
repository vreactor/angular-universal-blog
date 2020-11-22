import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'app/models';
import { environment } from 'environments/environment';
import { CookieService } from 'ngx-cookie';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IFbLogin } from '../models';

@Injectable()
export class AuthService {
    error$: Subject<string> = new Subject<string>();

    constructor(private http: HttpClient, private cookieService: CookieService) {}

    get token(): string {
        const expDate = new Date(this.cookieService.get('fb-token-exp'));

        if (new Date() > expDate) {
            this.logout();
            return null;
        }

        return this.cookieService.get('fb-token');
    }

    login(user: IUser): Observable<any> {
        user.returnSecureToken = true;

        return this.http
            .post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword', user, {
                params: {
                    key: environment.apiKey
                }
            })
            .pipe(tap(this.setToken.bind(this)), catchError(this.handlerErrors.bind(this)));
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

            this.cookieService.put('fb-token', res.idToken);
            this.cookieService.put('fb-token-exp', expDate.toString());

            return;
        }

        this.cookieService.removeAll();
    }

    private handlerErrors(error) {
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
