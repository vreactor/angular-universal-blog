import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MblogSkeletonModule } from 'app/lib/mblog-skeleton';
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
        CommonModule,
        MblogSkeletonModule
    ],
    declarations: [COMPONENTS]
})
export class HomeModule {}
