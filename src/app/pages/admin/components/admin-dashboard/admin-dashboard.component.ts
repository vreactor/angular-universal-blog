import { Component, OnInit } from '@angular/core';
import { IPost } from 'app/models';
import { PostService } from 'app/services';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.less'],
    host: { class: 'mblog-content-vertical' }
})
export class AdminDashboardComponent implements OnInit {
    filter: string = undefined;
    field = 'title';

    posts: IPost[] = [];
    inProgress: boolean = true;

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.postService
            .getAll()
            .pipe(finalize(() => (this.inProgress = false)))
            .subscribe((posts: IPost[]) => {
                this.posts = posts;
            });
    }

    remove(id: string) {
        this.postService.remove(id).subscribe(() => {
            this.posts = this.posts.filter((post: IPost) => post.id !== id);
        });
    }
}
