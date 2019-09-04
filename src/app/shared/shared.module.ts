import { NgModule } from '@angular/core';
import { QuillModule } from 'ngx-quill';

import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';

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
export class SharedModule { }
