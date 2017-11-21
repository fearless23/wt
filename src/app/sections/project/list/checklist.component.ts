import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProjectService } from '../project.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-project-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ProjectChecklistComponent implements OnInit {

  userUID: String;
  steps: Observable<any>;
  tasks: Observable<any>;

  constructor(
    private projectService: ProjectService,
    private afa: AngularFireAuth
  ) { }

  ngOnInit() {

    this.afa.authState.subscribe(user => {
      this.userUID = user.uid;
      const USER_UID = user.uid;
      this.steps = this.projectService.getSteps(USER_UID);
      this.tasks = this.projectService.getTasks(USER_UID);
    });

  }

  addStep(stepName) {
    const STEP = {
      'name': stepName,
      'description': ''
    };
    this.projectService.addStep(this.userUID, STEP);
  }

  addTask(taskName, stepKey) {
    const TASK = {
      'name': taskName,
      'description': '',
      'stepKey': stepKey,
    };
    this.projectService.addTask(this.userUID, TASK);
  }

  taskStatus(taskKey, taskStatus) {
    const updatedTask = { 'isDone': taskStatus };
    this.projectService.updateTask(this.userUID, taskKey, updatedTask);
  }

  taskEdit(taskKey, taskName) {
    const updatedTask = { 'name': taskName };
    this.projectService.updateTask(this.userUID, taskKey, updatedTask);
  }

}
