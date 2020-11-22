import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/modules/app-common/services';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html'
})
export class AdminLayoutComponent {
    constructor(private router: Router, public authService: AuthService) {}

    logout(event: Event) {
        event.preventDefault();
        this.authService.logout();
        this.router.navigate(['/admin', 'login']);
    }
}
