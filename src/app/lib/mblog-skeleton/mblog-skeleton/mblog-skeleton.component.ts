import { DOCUMENT, isPlatformServer } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostListener,
    Inject,
    Input,
    PLATFORM_ID,
    ViewEncapsulation
} from '@angular/core';

@Component({
    selector: 'mblog-skeleton',
    templateUrl: './mblog-skeleton.component.html',
    styleUrls: ['./mblog-skeleton.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MblogSkeletonComponent {
    private _document: HTMLDocument;

    @Input() height: number;
    @Input() width: number;
    @Input() mClass: string;
    @Input() fillHorizontal = false;
    @Input() fillVertical = false;

    constructor(
        private elementRef: ElementRef,
        @Inject(DOCUMENT) document: any,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this._document = document;
    }

    get glowWidth() {
        return `${this._document.body.clientWidth}px`;
    }

    get glowLeft() {
        if (isPlatformServer(this.platformId)) {
            return '';
        }

        const left = this.elementRef.nativeElement.getBoundingClientRect().left;
        return `-${left}px`;
    }

    @HostListener('window:resize', [])
    onWindowResize() {}
}
