import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminProfesseurComponent } from './admin-professeur/admin-professeur.component';
import { AdminInscriptionsComponent } from './admin-inscriptions/admin-inscriptions.component';
import { AdminNotesComponent } from './admin-notes/admin-notes.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, //redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/settings', component: SettingsComponent },
  { path: 'admin/professeurs', component: AdminProfesseurComponent },
  { path: 'admin/inscriptions', component: AdminInscriptionsComponent },
  { path: 'admin/notes', component: AdminNotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
