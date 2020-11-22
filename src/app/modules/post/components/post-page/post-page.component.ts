import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IPost } from 'app/modules/app-common/models/interfaces';
import { PostService } from 'app/modules/app-common/services';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-post-page',
    templateUrl: './post-page.component.html',
    styleUrls: ['./post-page.component.less']
})
export class PostPageComponent implements OnInit {
    post: IPost;

    constructor(private route: ActivatedRoute, private postService: PostService) {}

    ngOnInit() {
        this.route.params
            .pipe(switchMap((params: Params) => this.postService.getPost(params.id)))
            .subscribe((post: IPost) => (this.post = post));
    }
}
