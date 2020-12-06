import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from 'app/models';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFbPost } from '../modules/shared/models';

@Injectable({ providedIn: 'root' })
export class PostService {
    constructor(private http: HttpClient) {}

    create(post: IPost): Observable<IPost> {
        return this.http.post(`${environment.databaseURL}/post.json`, post).pipe(
            map((res: IFbPost) => ({
                ...post,
                id: res.name
            }))
        );
    }

    getAll(): Observable<IPost[]> {
        return this.http.get<IPost[]>(`${environment.databaseURL}/posts.json`).pipe(
            map((res: { [key: string]: any }) =>
                Object.keys(res).map(key => ({
                    ...res[key],
                    id: key
                }))
            )
        );
    }

    getPost(id: string): Observable<IPost> {
        return this.http
            .get<IPost>(`${environment.databaseURL}/posts/${id}.json`)
            .pipe(map((post: IPost) => ({ ...post, id })));
    }

    remove(id: string): Observable<void> {
        return this.http.delete<void>(`${environment.databaseURL}/posts/${id}.json`);
    }

    update(post: IPost): Observable<IPost> {
        return this.http.patch<IPost>(`${environment.databaseURL}/posts/${post.id}.json`, post);
    }
}
