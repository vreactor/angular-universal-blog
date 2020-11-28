import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MblogSkeletonBoxDirective } from './mblog-skeleton-box/mblog-skeleton-box.directive';
import { MblogSkeletonComponent } from './mblog-skeleton/mblog-skeleton.component';

@NgModule({
    imports: [CommonModule],

    declarations: [MblogSkeletonComponent, MblogSkeletonBoxDirective],
    exports: [MblogSkeletonComponent, MblogSkeletonBoxDirective],
    entryComponents: [MblogSkeletonComponent]
})
export class MblogSkeletonModule {}
