import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/modules/app-common/services';

@Component({
    selector: 'app-admin-layout',
    templateUrl: './admin-layout.component.html',
    styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
    constructor(private router: Router, public authService: AuthService) {}

    ngOnInit() {}

    logout(event: Event) {
        event.preventDefault();
        this.authService.logout();
        this.router.navigate(['/admin', 'login']);
    }
}
