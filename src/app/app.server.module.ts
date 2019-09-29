// angular
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { CookieBackendService, CookieService } from 'ngx-cookie';

import { AppModule } from './app.module';
import { AppComponent } from './components';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        ServerTransferStateModule,
        ModuleMapLoaderModule
    ],
    bootstrap: [AppComponent],
    providers: [{ provide: CookieService, useClass: CookieBackendService }]
})
export class AppServerModule {}
