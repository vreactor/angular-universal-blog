import { Component, Input } from '@angular/core';
import { IPost } from 'app/models';

@Component({
    selector: 'post',
    templateUrl: './post.component.html'
})
export class PostComponent {
    @Input() post: IPost = undefined;
}
