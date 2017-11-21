import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProjectService } from '../project.service';
import { Observable } from 'rxjs/Observable';
// import { filter } from 'rxjs/operator/filter';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-project-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})

export class ProjectStepsComponent implements OnInit {

  dropStepSelector = false;
  stepWindowDropdown = false;

  userUID: String;
  steps: Observable<any>;
  selectedStepKey: String;
  selectedStep: Observable<any>;
  tasksForStep: Observable<any>;
  completedTasksLength;
  stepProgress: Number;
  taskStatusFilter; // Passed to bool pipe
  taskActive = 'any'; // to change active on task STaus filterLinks

  constructor(private afa: AngularFireAuth, private projectService: ProjectService) { }

  ngOnInit() {
    this.afa.authState.subscribe(user => {
      this.userUID = user.uid;
      const USER_UID = user.uid;
      this.steps = this.projectService.getSteps(USER_UID);
      this.projectService.getSteps(USER_UID).subscribe(steps => {
        if (!steps) { return; }
        this.selectedStepKey = steps[0]['pushKey'];
        this.selectedStep = Observable.of(steps[0]);
        this.tasksForStep = this.projectService.getTasksForStep(user.uid, steps[0]['pushKey']);
        this.progress(this.tasksForStep);
      });
    });

  }


  setStepId(stepKey) {
    this.selectedStepKey = stepKey;
    this.selectedStep = this.projectService.getStep(this.userUID, stepKey);
    this.tasksForStep = this.projectService.getTasksForStep(this.userUID, stepKey);
    this.progress(this.tasksForStep);
  }

  addTask(taskName) {
    const TASK = {
      'name': taskName,
      'description': '',
      'stepKey': this.selectedStepKey,
    };
    this.projectService.addTask(this.userUID, TASK);
    this.progress(this.tasksForStep);
  }

  addStep(stepName) {
    const STEP = {
      'name': stepName,
      'description': ''
    };
    this.projectService.addStep(this.userUID, STEP);
    this.progress(this.tasksForStep);
  }

  taskStatus(taskKey, taskStatus) {
    const updatedTask = { 'isDone': taskStatus };
    this.projectService.updateTask(this.userUID, taskKey, updatedTask);
  }

  taskEdit(taskKey, taskName) {
    const updatedTask = { 'name': taskName };
    this.projectService.updateTask(this.userUID, taskKey, updatedTask);
  }

  onClickOutsideStepSelector(event: Object) {
    this.dropStepSelector = false;
  }
  onClickOutsideStepWindowDropdown(event: Object) {
    this.stepWindowDropdown = false;
  }

  private progress(passedArray) {
    passedArray.subscribe(items => {
      const TOTAL_LENGTH = items.length;
      this.completedTasksLength = 0;
      for (const item of items) {
        if (item.isDone === true) {
          this.completedTasksLength++;
        }
      }
      this.stepProgress = Math.round((this.completedTasksLength / TOTAL_LENGTH) * 10000) / 100;
    });
  }

  addBackburner(backburnerName) {
    this.selectedStep.subscribe(step => {
      const backburnersArray = { 'backburners': step.backburners || [] };
      backburnersArray['backburners'].push(backburnerName);
      this.projectService.updateStep(this.userUID, this.selectedStepKey, backburnersArray);
    });
  }

  addNote(note) {
    this.selectedStep.subscribe(step => {
      const notesArray = { 'notes': step.notes || [] };
      notesArray['notes'].push(note);
      this.projectService.updateStep(this.userUID, this.selectedStepKey, notesArray);
    });
  }

  filterTasksByStatus(value) {
    this.taskStatusFilter = value.toLowerCase();
    this.taskActive = value;
  }

}
