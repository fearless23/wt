import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStuffComponent } from './add-stuff.component';
import { AddProjectComponent } from './child/add-project.component';
import { AddStepComponent } from './child/add-step.component';
import { AddTaskComponent } from './child/add-task.component';

const routes: Routes = [
  {
    path: '',
    component: AddStuffComponent,
    children: [
      { path: 'project', component: AddProjectComponent },
      { path: 'step', component: AddStepComponent },
      { path: 'task', component: AddTaskComponent },
      { path: '', pathMatch: 'full', redirectTo: 'project' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStuffRoutingModule { }

export const rc = [
  AddStuffComponent,
  AddProjectComponent,
  AddStepComponent,
  AddTaskComponent
];
