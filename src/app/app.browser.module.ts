import { NgModule } from '@angular/core';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        AppModule,
        BrowserTransferStateModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: false })
    ]
})
export class AppBrowserModule {}
