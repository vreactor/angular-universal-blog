import { NgModule, ModuleWithProviders } from '@angular/core';
import { QuillModule } from 'ngx-quill';

import { AuthService, PostService } from './services';

@NgModule({
    imports: [
        QuillModule.forRoot()
    ],
    providers: [
        PostService,
        AuthService
    ],
    exports: [
        QuillModule
    ]
})
export class AppCommonModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AppCommonModule };
    }
}
