import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeButtonComponent } from './home-button/home-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HomeButtonComponent
  ],
  exports: [ HomeButtonComponent ]
})
export class SharedModule { }
