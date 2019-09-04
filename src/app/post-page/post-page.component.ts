import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../shared/services/post.service';
import { Observable } from 'rxjs';
import { IPost } from '../shared/models/interfaces/post.interface';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {
  post: IPost = undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => this.postService.getPost(params.id))
      )
      .subscribe((post: IPost) => this.post = post);
  }
}
