import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { PostLayoutComponent } from './components';

const COMPONENTS = [PostLayoutComponent];
const ROUTES: Routes = [
    {
        path: '',
        component: PostLayoutComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES), CommonModule, SharedModule],
    declarations: [COMPONENTS]
})
export class PostModule {}
