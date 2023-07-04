import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRightComponent } from './auth-right/auth-right.component';
import { MaterailModuleModule } from './materail-module/materail-module.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterComponent } from './footer/footer.component';
import { CustmizedModalComponent } from './model/custmized-modal/custmized-modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AuthRightComponent,
    HeaderComponent,
    SidebarComponent,
    PaginationComponent,
    FooterComponent,
    CustmizedModalComponent
  ],
  imports: [CommonModule, MaterailModuleModule, RouterModule],
  exports: [
    AuthRightComponent,
    MaterailModuleModule,
    HeaderComponent,
    SidebarComponent,
    PaginationComponent,
    FooterComponent,
    RouterModule
  ]
})
export class SharedModule {}
