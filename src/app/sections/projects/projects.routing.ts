// app/projects/projects.routing.ts
// Projects Routing as a Module
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { ProjectsComponent } from './projects.component';
import { AddProjectComponent } from './add-project/add-project.component';

// Routes
const projectsRoutes: Routes =
  [
    { path: 'add', component: AddProjectComponent },
    { path: '', component: ProjectsComponent, pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forChild(projectsRoutes)],
  exports: [RouterModule]
})

export class ProjectsRoutingModule { }

export const rc = [
  ProjectsComponent,
  AddProjectComponent
];
