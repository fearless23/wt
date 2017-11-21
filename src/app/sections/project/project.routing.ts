// app/projects/projects.routing.ts
// Projects Routing as a Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ProjectComponent } from './project.component';
import { ProjectOverviewComponent } from './overview/overview.component';
import { ProjectStepsComponent} from './steps/steps.component';
import { ProjectChecklistComponent } from './list/checklist.component';

// Routes
const projectsRoutes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      { path: 'overview', component: ProjectOverviewComponent },
      { path: 'steps', component: ProjectStepsComponent },
      { path: 'list', component: ProjectChecklistComponent },
      // { path: 'apps', component: ProjectAppsComponent }
      { path: '', redirectTo: 'overview', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(projectsRoutes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule { }

export const rc = [
  ProjectComponent,
  ProjectOverviewComponent,
  ProjectStepsComponent,
  ProjectChecklistComponent
];
