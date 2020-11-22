import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class LazyRoutePreloadingStrategy implements PreloadingStrategy {
    preload(route: Route, preload: Function): Observable<any> {
        if (route.data && route.data.preload) {
            return preload();
        } else {
            return of(null);
        }
    }
}
