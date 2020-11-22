import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppCommonModule } from '../app-common/app-common.module';
import { PostPageComponent } from './components';

const COMPONENTS = [PostPageComponent];
const ROUTES: Routes = [
    {
        path: '',
        component: PostPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES), CommonModule, AppCommonModule],
    declarations: [COMPONENTS]
})
export class PostModule {}
