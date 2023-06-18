import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './views/auth/auth.module';

const routes: Routes = [
    { path: 'auth', loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)},
    { path: 'dashboard', loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
