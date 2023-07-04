import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard.component';
import { WorkOrderComponent } from './work-order/work-order.component';
import { LspDashboardComponent } from './lsp_dashboard/lsp-dashboard/lsp-dashboard.component';
import { DashboardComponent } from './dashboard.component';
import { CompanySettingComponent } from './company-setting/company-setting.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,   
   
    children: [
      {
        path: '',
        component: LspDashboardComponent,
      },
      {
        path: 'work-order',
        component: WorkOrderComponent,        
        
      },
      {
        path: 'company-setting',
        component: CompanySettingComponent,        
      }
    ]
  }
  // { path:'work-order', component:WorkOrderComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
