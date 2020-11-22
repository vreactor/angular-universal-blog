import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'app/modules/app-common/services';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authService.isAuth()) {
            this.router.navigate(['/admin', 'dashboard']);
            return false;
        } else {
            return true;
        }
    }
}
