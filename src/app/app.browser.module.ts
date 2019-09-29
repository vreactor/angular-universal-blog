// angular
import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StateTransferInitializerModule } from '@nguniversal/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';

import { AppModule } from './app.module';
import { AppComponent } from './components';
import { InlineStyleModule } from './modules/inline-style/inline-style.module';

// the Request object only lives on the server
export function getRequest(): any {
    return { headers: { cookie: document.cookie } };
}

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        AppModule,
        StateTransferInitializerModule,
        BrowserTransferStateModule,
        // include style to inline style server render
        InlineStyleModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: false })
    ],
    providers: [
        {
            // The server provides these in main.server
            provide: REQUEST,
            useFactory: getRequest
        },
        { provide: 'ORIGIN_URL', useValue: location.origin }
    ]
})
export class AppBrowserModule {}
