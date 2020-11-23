import { Component } from '@angular/core';

@Component({
    selector: 'main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.less'],
    host: { class: 'mblog-page' }
})
export class MainLayoutComponent {
    constructor() {}
}
