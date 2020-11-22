import { ModuleWithProviders, NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { AuthService } from './services';

@NgModule({
    imports: [QuillModule.forRoot()],
    providers: [AuthService],
    exports: [QuillModule]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return { ngModule: SharedModule };
    }
}
