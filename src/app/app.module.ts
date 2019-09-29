import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieModule } from 'ngx-cookie';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './components/app/app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { PostPageComponent } from './components/post-page/post-page.component';
import { PostComponent } from './components/post/post.component';
import { AppCommonModule } from './modules/app-common/app-common.module';
import { AuthInterceptor } from './modules/app-common/interseptors';

const INTERCEPTOR_AUTH: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthInterceptor
};

@NgModule({
    declarations: [
        AppComponent,
        MainLayoutComponent,
        HomePageComponent,
        PostPageComponent,
        PostComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'my-app' }),
        BrowserAnimationsModule,
        HttpClientModule,
        AppCommonModule.forRoot(),
        CookieModule.forRoot(),
        AppRoutingModule
    ],
    providers: [
        INTERCEPTOR_AUTH
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
