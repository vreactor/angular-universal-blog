import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { CookieBackendModule } from 'ngx-cookie-backend';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
    imports: [AppModule, ServerModule, CookieBackendModule.forRoot(), ServerTransferStateModule],
    bootstrap: [AppComponent]
})
export class AppServerModule {}
