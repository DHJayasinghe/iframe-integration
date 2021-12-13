import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SafePipe } from './pipes/safe.pipe';
import { DashboardComponent } from './tabs/dashboard/dashboard.component';
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
];

@NgModule({
  declarations: [
    SafePipe,
    DashboardComponent,
    MaintenanceComponent,
    ManagementComponent,
    MaintenanceLegacyComponent
  ],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
