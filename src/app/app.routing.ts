import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyRoutePreloadingStrategy } from './providers';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: LazyRoutePreloadingStrategy,
            paramsInheritanceStrategy: 'always'
        })
    ],
    exports: [RouterModule],
    providers: [LazyRoutePreloadingStrategy]
})
export class AppRoutingModule {}
