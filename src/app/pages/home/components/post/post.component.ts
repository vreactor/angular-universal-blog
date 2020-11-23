import { Component, Input } from '@angular/core';
import { IPost } from 'app/models';

@Component({
    selector: 'post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.less']
})
export class PostComponent {
    @Input() post: IPost = undefined;
}
