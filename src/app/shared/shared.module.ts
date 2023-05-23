import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRightComponent } from './auth-right/auth-right.component';
import { MaterailModuleModule } from './materail-module/materail-module.module';


@NgModule({
  declarations: [
   
  
    AuthRightComponent
  ],
  imports: [
    CommonModule,
    MaterailModuleModule,
  ],
  exports:[
    AuthRightComponent,
    MaterailModuleModule
  ],
})
export class SharedModule { }
