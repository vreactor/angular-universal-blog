import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, MainLayoutComponent } from './components';

@NgModule({
    imports: [RouterModule],
    declarations: [MainLayoutComponent, FooterComponent]
})
export class MainLayoutModule {}
