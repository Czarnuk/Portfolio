import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsDoneComponent } from './projects-done/projects-done.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProjectsDoneComponent],
  declarations: [ProjectsDoneComponent]
})
export class ProjectsDoneModule { }
