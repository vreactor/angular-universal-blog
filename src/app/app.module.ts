import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_ID, Inject, NgModule, PLATFORM_ID, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieModule } from 'ngx-cookie';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { MainLayoutModule } from './modules/main-layout';
import { AuthInterceptor } from './modules/shared/interseptors';
import { SharedModule } from './modules/shared/shared.module';

const INTERCEPTOR_AUTH: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: AuthInterceptor
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'my-app' }),
        BrowserAnimationsModule,
        HttpClientModule,
        MainLayoutModule,
        SharedModule.forRoot(),
        CookieModule.forRoot(),
        AppRoutingModule
    ],
    providers: [INTERCEPTOR_AUTH],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
        @Inject(PLATFORM_ID) private platformId: object,
        @Inject(APP_ID) private appId: string
    ) {
        const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
        console.log(`Running ${platform} with appId=${appId}`);
    }
}
