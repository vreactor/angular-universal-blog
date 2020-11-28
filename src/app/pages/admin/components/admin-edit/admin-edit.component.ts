import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { IPost } from 'app/models';
import { PostService } from 'app/services';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-admin-edit',
    templateUrl: './admin-edit.component.html'
})
export class AdminEditComponent implements OnInit {
    post: IPost;
    inProgress: boolean = true;
    form: FormGroup = new FormGroup({
        title: new FormControl(undefined, Validators.required),
        text: new FormControl(undefined, Validators.required)
    });

    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.params
            .pipe(switchMap((params: Params) => this.postService.getPost(params.id)))
            .subscribe((post: IPost) => {
                this.inProgress = false;
                this.post = post;
                this.form.setValue({
                    title: post.title,
                    text: post.text
                });
            });
    }

    edit() {
        if (this.form.invalid) {
            return;
        }

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
}
