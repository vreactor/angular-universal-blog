import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './modules/main-layout';
import { LazyRoutePreloadingStrategy } from './providers';

const ROUTES: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'post',
                loadChildren: () => import('app/pages/post/post.module').then(m => m.PostModule)
            }
        ]
    },
    {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, {
            preloadingStrategy: LazyRoutePreloadingStrategy,
            paramsInheritanceStrategy: 'always'
        })
    ],
    exports: [RouterModule],
    providers: [LazyRoutePreloadingStrategy]
})
export class AppRoutingModule {}
