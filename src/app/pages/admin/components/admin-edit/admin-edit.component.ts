import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'app/models';
import { PostService } from 'app/services';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-admin-edit',
    templateUrl: './admin-edit.component.html'
})
export class AdminEditComponent implements OnInit {
    post: IPost;
    inProgress: boolean;
    form: FormGroup = new FormGroup({
        title: new FormControl(undefined, Validators.required),
        text: new FormControl(undefined, Validators.required)
    });

    get postId(): string {
        return this.route.snapshot.params.id;
    }

    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        if (!this.postId) {
            return;
        }

        this.inProgress = true;

        this.postService
            .getPost(this.postId)
            .pipe(finalize(() => (this.inProgress = false)))
            .subscribe((post: IPost) => {
                this.inProgress = false;
                this.post = post;
                this.form.setValue({
                    title: post.title,
                    text: post.text
                });
            });
    }

    handleActionPost() {
        if (this.form.invalid) {
            return;
        }

        if (this.postId) {
            this.edit();
        } else {
            this.create();
        }
    }

    edit() {
        this.postService
            .update({
                ...this.post,
                title: this.form.value.title,
                text: this.form.value.text
            })
            .subscribe(() => {
                this.router.navigate(['/admin', 'dashboard']);
            });
    }

    create() {
        const post: IPost = {
            title: this.form.value.title,
            author: this.form.value.author,
            text: this.form.value.text,
            date: new Date()
        };

        this.postService.create(post).subscribe((res: IPost) => {
            this.router.navigate(['/admin', 'dashboard']);
        });
    }
}
