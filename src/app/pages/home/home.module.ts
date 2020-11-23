import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeLayoutComponent, PostComponent } from './components';

const COMPONENTS = [HomeLayoutComponent, PostComponent];

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: HomeLayoutComponent
            }
        ]),
        CommonModule
    ],
    declarations: [COMPONENTS]
})
export class HomeModule {}
