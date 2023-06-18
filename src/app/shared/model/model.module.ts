import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustmizedModalComponent } from './custmized-modal/custmized-modal.component';



@NgModule({
  declarations: [
    CustmizedModalComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustmizedModalComponent,
  ]
})
export class ModelModule { }
