import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SafePipe } from './pipes/safe.pipe';
import { CustomSsoComponent } from './tabs/custom-sso/custom-sso.component';
import { DashboardComponent } from './tabs/dashboard/dashboard.component';
import { IfcomIntegrationExistingComponent } from './tabs/ifcom-integration-existing/ifcom-integration-existing.component';
import { IfcomIntegrationComponent } from './tabs/ifcom-integration/ifcom-integration.component';
import { MaintenanceLegacyComponent } from './tabs/maintenance-legacy/maintenance-legacy.component';
import { MaintenanceComponent } from './tabs/maintenance/maintenance.component';
import { ManagementComponent } from './tabs/management/management.component';
import { UserImpersonationComponent } from './tabs/user-impersonation/user-impersonation.component';

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
  {
    path: 'maintenance/legacy/ifcom/existing',
    component: IfcomIntegrationExistingComponent,
  },
  {
    path: 'user-impersonation',
    component: UserImpersonationComponent,
  },
  {
    path: 'custom-sso',
    component: CustomSsoComponent,
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
    UserImpersonationComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
