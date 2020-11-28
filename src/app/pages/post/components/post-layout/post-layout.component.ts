import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IPost } from 'app/models';
import { PostService } from 'app/services';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'post-layout',
    templateUrl: './post-layout.component.html',
    styleUrls: ['./post-layout.component.less']
})
export class PostLayoutComponent implements OnInit {
    post: IPost;
    inProgress: boolean = true;

    constructor(private route: ActivatedRoute, private postService: PostService) {}

    ngOnInit() {
        this.route.params
            .pipe(switchMap((params: Params) => this.postService.getPost(params.id)))
            .subscribe((post: IPost) => {
                this.post = post;
                this.inProgress = false;
            });
    }
}
