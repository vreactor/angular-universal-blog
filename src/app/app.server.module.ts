import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { CookieBackendService, CookieService } from 'ngx-cookie';

import { AppModule } from './app.module';
import { AppComponent } from './components';
import { InlineStyleComponent } from './modules/inline-style/inline-style.component';
import { InlineStyleModule } from './modules/inline-style/inline-style.module';

@NgModule({
    imports: [
        AppModule,
        ServerModule,
        ServerTransferStateModule,
        ModuleMapLoaderModule,
        // include style to inline style server render
        InlineStyleModule
    ],
    bootstrap: [AppComponent, InlineStyleComponent],
    providers: [{ provide: CookieService, useClass: CookieBackendService }]
})
export class AppServerModule {}
