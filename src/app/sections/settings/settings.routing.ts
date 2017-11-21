// app/projects/projects.routing.ts
// Projects Routing as a Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { SettingsComponent } from './settings.component';
import { AccountSettingsComponent } from './account/account.component';
import { ProfileSettingsComponent } from './profile/profile.component';

// Routes
const projectsRoutes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: 'account', component: AccountSettingsComponent },
      { path: 'profile', component: ProfileSettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(projectsRoutes)],
  exports: [RouterModule]
})

export class SettingsRoutingModule { }

export const rc = [
  SettingsComponent,
  AccountSettingsComponent,
  ProfileSettingsComponent
];
