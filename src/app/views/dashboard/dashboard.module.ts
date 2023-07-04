import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { LspDashboardComponent } from './lsp_dashboard/lsp-dashboard/lsp-dashboard.component';
import { WorkOrderComponent } from './work-order/work-order.component';
import { RouterModule } from '@angular/router';
import { CompanySettingComponent } from './company-setting/company-setting.component';

// import { HeaderComponent } from 'src/app/shared/header/header.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LspDashboardComponent,
    WorkOrderComponent,
    CompanySettingComponent,
    // HeaderComponent
 

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    RouterModule
    
  
  ],
  exports: [
    DashboardRoutingModule,
    SharedModule,
    LspDashboardComponent,
    WorkOrderComponent,
    RouterModule,
    
  ]
})
export class DashboardModule { }
