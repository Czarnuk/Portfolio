import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeReviewComponent } from './code-review/code-review.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CodeReviewComponent],
  declarations: [CodeReviewComponent]
})
export class CodeReviewModule { }
