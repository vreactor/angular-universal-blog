import { Component, OnInit } from '@angular/core';
import { IPost } from 'app/modules/app-common/models/interfaces';
import { PostService } from 'app/modules/app-common/services';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.less']
})
export class AdminDashboardComponent implements OnInit {
    filter: string = undefined;
    field = 'title';

    posts: IPost[] = [];

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.postService.getAll().subscribe((posts: IPost[]) => {
            this.posts = posts;
        });
    }

    remove(id: string) {
        this.postService.remove(id).subscribe(() => {
            this.posts = this.posts.filter((post: IPost) => post.id !== id);
        });
    }
}
