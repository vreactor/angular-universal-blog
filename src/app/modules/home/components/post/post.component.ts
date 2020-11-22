import { Component, Input } from '@angular/core';
import { IPost } from 'app/modules/app-common/models/interfaces';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html'
})
export class PostComponent {
    @Input() post: IPost = undefined;
}
