import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent, PostComponent, PostsComponent } from './components';

const COMPONENTS = [PostsComponent, HomeLayoutComponent, PostComponent];
const ROUTES: Routes = [
    {
        path: '',
        component: HomeLayoutComponent,
        children: [
            { path: '', redirectTo: '/', pathMatch: 'full' },
            {
                path: '',
                component: PostsComponent
            },
            {
                path: 'post/:id',
                loadChildren: () => import('app/modules/post/post.module').then(m => m.PostModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES), CommonModule],
    declarations: [COMPONENTS]
})
export class HomeModule {}
