import { Component, Input } from '@angular/core';
import { IPost } from 'app/modules/app-common/models/interfaces';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent {
    @Input() post: IPost = undefined;
}
