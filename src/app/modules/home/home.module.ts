import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent, MainLayoutComponent, PostComponent } from './components';

const COMPONENTS = [HomePageComponent, MainLayoutComponent, PostComponent];
const ROUTES: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: '/', pathMatch: 'full' },
            {
                path: '',
                component: HomePageComponent
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
    declarations: [COMPONENTS],
    providers: [DatePipe]
})
export class HomeModule {}
