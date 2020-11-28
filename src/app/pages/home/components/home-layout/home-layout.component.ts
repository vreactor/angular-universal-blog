import { Component, OnInit } from '@angular/core';
import { IPost } from 'app/models';
import { PostService } from 'app/services';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'home-layout',
    templateUrl: './home-layout.component.html',
    styleUrls: ['./home-layout.component.less']
})
export class HomeLayoutComponent implements OnInit {
    posts: IPost[];
    inProgress: boolean = true;

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.postService
            .getAll()
            .pipe(finalize(() => (this.inProgress = false)))
            .subscribe(posts => (this.posts = posts));
    }
}
