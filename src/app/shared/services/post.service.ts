import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IFbPost } from '../models/interfaces/fb-post.interface';
import { IPost } from '../models/interfaces/post.interface';
import { environment } from './../../../environments/environment.prod';

@Injectable()
export class PostService {
    constructor(
        private http: HttpClient
    ) {}

    create(post: IPost): Observable<IPost> {
        return this.http.post(`${environment.databaseURL}/posts.json`, post)
            .pipe(
                map((res: IFbPost) => {
                    const newPost: IPost = {
                        ...post,
                        id: res.name
                    };

                    return newPost;
                })
            );
    }

    getAll(): Observable<IPost[]> {
        return this.http.get<IPost[]>(`${environment.databaseURL}/posts.json`)
            .pipe(
                map((res: {[key: string]: any}) => {
                    return Object.keys(res).map(key => {
                        return {
                            ...res[key],
                            id: key
                        };
                    });
                })
            );
    }

    getPost(id: string): Observable<IPost> {
        return this.http.get<IPost>(`${environment.databaseURL}/posts/${id}.json`)
            .pipe(
                map((post: IPost) => ({ ...post, id }))
            );
    }

    remove(id: string): Observable<void> {
        return this.http.delete<void>(`${environment.databaseURL}/posts/${id}.json`);
    }

    update(post: IPost): Observable<IPost> {
        return this.http.patch<IPost>(`${environment.databaseURL}/posts/${post.id}.json`, post);
    }
}
