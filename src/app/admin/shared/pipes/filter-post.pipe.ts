import { Pipe, PipeTransform } from '@angular/core';

import { IPost } from '../../../shared/models/interfaces/post.interface';

@Pipe({
    name: 'filterPost',
    pure: true
})
export class FilterPostPipe implements PipeTransform {
    transform(posts: IPost[], search: string, field: string = 'title') {
        search = search ? search : '';

        if (!search.trim()) {
            return posts;
        }

        return posts.filter((post: IPost) => post[field].toLowerCase().includes(search.trim().toLowerCase()));
    }
}
