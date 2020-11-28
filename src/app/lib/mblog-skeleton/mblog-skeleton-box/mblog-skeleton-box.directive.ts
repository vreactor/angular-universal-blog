import {
    ComponentFactory,
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    TemplateRef,
    ViewContainerRef
} from '@angular/core';
import { MblogSkeletonComponent } from '../mblog-skeleton/mblog-skeleton.component';

@Directive({
    selector: '[mblogSkeleton]'
})
export class MblogSkeletonBoxDirective implements OnInit, OnChanges {
    private _componentFactory: ComponentFactory<MblogSkeletonComponent>;
    private _componentRef: ComponentRef<MblogSkeletonComponent>;

    @Input('mblogSkeleton') active: boolean;
    @Input('mblogSkeletonMClass') mClass: string;
    @Input('mblogSkeletonHeight') height: number;
    @Input('mblogSkeletonWidth') width: number;

    constructor(
        private templateRef: TemplateRef<HTMLElement>,
        private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {
        this._componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            MblogSkeletonComponent
        );
    }

    ngOnInit(): void {
        this._componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            MblogSkeletonComponent
        );
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.height || changes.width) {
            this.updateSize();
        }
        if (changes.class) {
            this.updateClass();
        }
        if (changes.active) {
            this.toggle();
        }
    }

    private toggle() {
        if (this.active) {
            this.reattach();
            this.updateSize();
            this.updateClass();
        } else {
            this.viewContainer.clear();
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }

    private reattach() {
        this.viewContainer.clear();
        this._componentRef = this.viewContainer.createComponent(this._componentFactory);
    }

    private updateClass() {
        if (this._componentRef) {
            this._componentRef.instance.mClass = this.mClass;
        }
    }

    private updateSize() {
        if (!this._componentRef) {
            return;
        }

        this._componentRef.instance.fillHorizontal = !this.width;
        this._componentRef.instance.fillVertical = !this.height;
        this._componentRef.instance.height = typeof this.height === 'number' ? this.height : null;
        this._componentRef.instance.width = typeof this.width === 'number' ? this.width : null;
    }
}
