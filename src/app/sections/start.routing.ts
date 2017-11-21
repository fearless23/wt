// Start.routing.ts
// Start Routing as a Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AuthGuard } from './../core/auth.guard';
import { StartComponent } from './start.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { SearchBoxComponent } from './header/search-box/search-box.component';
import { TabsComponent } from './tabs/tabs.component';

// Routes
const routes: Routes = [
  {
    path: '',
    component: StartComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'projects', loadChildren: './projects/projects.module#ProjectsModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'project/:id', loadChildren: './project/project.module#ProjectModule',
        canActivate: [AuthGuard]
      },
      {
        path: 'settings', loadChildren: './settings/settings.module#SettingsModule',
        canActivate: [AuthGuard]
      }
      // {
      //   path: 'add-stuff', loadChildren: './add-stuff/add-stuff.module#AddStuffModule',
      //   canActivate: [AuthGuard]
      // },
      // {
      //   path: 'profile', loadChildren: './profile/profile.module#ProfileModule',
      //   canActivate: [AuthGuard]
      // },
      // {
      //   path: '', loadChildren: './home/home.module#HomeModule',
      //   canActivate: [AuthGuard]
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartRoutingModule { }

export const rc = [
  StartComponent,
  NavComponent,
  HeaderComponent,
  SearchBoxComponent,
  TabsComponent
];
