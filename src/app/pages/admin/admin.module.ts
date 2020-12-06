import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MblogSkeletonModule } from 'app/lib/mblog-skeleton';
import { SharedModule } from 'app/modules/shared';
import { AdminRoutingModule } from './admin.routing';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AuthGuard, LoginGuard } from './guards';
import { FilterPostPipe } from './pipes/filter-post.pipe';

const COMPONENTS = [
    AdminLayoutComponent,
    AdminDashboardComponent,
    AdminEditComponent,
    AdminLoginComponent
];
const PIPES = [FilterPostPipe];
const GUARDS = [AuthGuard, LoginGuard];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        SharedModule,
        MblogSkeletonModule
    ],
    declarations: [COMPONENTS, PIPES],
    providers: [GUARDS]
})
export class AdminModule {}
