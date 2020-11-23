import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/modules/shared';
import { PostLayoutComponent } from './components';

const COMPONENTS = [PostLayoutComponent];

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: ':id',
                component: PostLayoutComponent
            }
        ]),
        CommonModule,
        SharedModule
    ],
    declarations: [COMPONENTS]
})
export class PostModule {}
