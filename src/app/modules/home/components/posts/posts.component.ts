import { Component, OnInit } from '@angular/core';
import { IPost } from 'app/models';
import { PostService } from 'app/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.less']
})
export class PostsComponent implements OnInit {
    post$: Observable<IPost[]>;

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.post$ = this.postService.getAll();
    }
}
