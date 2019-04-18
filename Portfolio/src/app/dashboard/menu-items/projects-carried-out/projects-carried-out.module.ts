import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsCarriedOutComponent } from './projects-carried-out/projects-carried-out.component';
import { ProjectsCarriedOutItemComponent } from './projects-carried-out-item/projects-carried-out-item.component';
import { SharedModule } from '../../../shared/shared.module';
import { HomeButtonComponent } from '../../../shared/home-button/home-button.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [ProjectsCarriedOutComponent],
  declarations: [ProjectsCarriedOutComponent, ProjectsCarriedOutItemComponent ]
})
export class ProjectsCarriedOutModule {
 
 }
