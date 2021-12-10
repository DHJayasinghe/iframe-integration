import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './tabs/dashboard/dashboard.component';
import { MaintenanceComponent } from './tabs/maintenance/maintenance.component';
import { ManagementComponent } from './tabs/management/management.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent,
  },
  {
    path: 'management',
    component: ManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
