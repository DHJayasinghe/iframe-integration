import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SafePipe } from './pipes/safe.pipe';
import { DashboardComponent } from './tabs/dashboard/dashboard.component';
import { IfcomIntegrationComponent } from './tabs/ifcom-integration/ifcom-integration.component';
import { MaintenanceLegacyComponent } from './tabs/maintenance-legacy/maintenance-legacy.component';
import { MaintenanceComponent } from './tabs/maintenance/maintenance.component';
import { ManagementComponent } from './tabs/management/management.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'management',
    component: ManagementComponent,
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent,
  },
  {
    path: 'maintenance/legacy',
    component: MaintenanceLegacyComponent,
  },
  {
    path: 'maintenance/legacy/ifcom',
    component: IfcomIntegrationComponent,
  },
];

@NgModule({
  declarations: [
    SafePipe,
    DashboardComponent,
    MaintenanceComponent,
    ManagementComponent,
    MaintenanceLegacyComponent,
    IfcomIntegrationComponent,
  ],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
