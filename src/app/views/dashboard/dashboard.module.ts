import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { LspDashboardComponent } from './lsp_dashboard/lsp-dashboard/lsp-dashboard.component';
// import { HeaderComponent } from 'src/app/shared/header/header.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LspDashboardComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    
  
  ],
  exports: [
    DashboardRoutingModule,
    SharedModule,
    LspDashboardComponent
  ]
})
export class DashboardModule { }
