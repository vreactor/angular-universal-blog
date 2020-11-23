import { Component, OnInit } from '@angular/core';
import { IPost } from 'app/models';
import { PostService } from 'app/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'home-layout',
    templateUrl: './home-layout.component.html',
    styleUrls: ['./home-layout.component.less']
})
export class HomeLayoutComponent implements OnInit {
    post$: Observable<IPost[]>;

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.post$ = this.postService.getAll();
    }
}
