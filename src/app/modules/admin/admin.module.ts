import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppCommonModule } from '../app-common/app-common.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminCreateComponent } from './components/admin-create/admin-create.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { AuthGuard, LoginGuard } from './shared/guards';
import { FilterPostPipe } from './shared/pipes/filter-post.pipe';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        AdminDashboardComponent,
        AdminCreateComponent,
        AdminEditComponent,
        AdminLoginComponent,
        FilterPostPipe
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AdminRoutingModule,
        AppCommonModule
     ],
    exports: [],
    providers: [
        AuthGuard,
        LoginGuard
    ]
})
export class AdminModule { }
