import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomePageComponent, MainLayoutComponent, PostPageComponent } from './components';

const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', redirectTo: '/', pathMatch: 'full' },
            { path: '', component: HomePageComponent },
            { path: 'post/:id', component: PostPageComponent }
        ]
    },
    { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
