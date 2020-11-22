import { Component, OnInit } from '@angular/core';
import { IPost } from 'app/modules/app-common/models/interfaces';
import { PostService } from 'app/modules/app-common/services';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
    post$: Observable<IPost[]>;

    constructor(private postService: PostService) {}

    ngOnInit() {
        this.post$ = this.postService.getAll();
    }
}
