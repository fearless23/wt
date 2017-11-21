import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class ProjectService {

  projectKey: String;

  constructor(private afs: AngularFirestore, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( params => this.projectKey = params['id']);
  }

  getProject(userUID) {
    const MY_PROJECT = this.afs.doc(`users/${userUID}/projects/${this.projectKey}`).valueChanges();
    return MY_PROJECT;
  }

  getStep(userUID, stepKey) {
    const STEP = this.afs.doc(`users/${userUID}/steps/${stepKey}`).valueChanges();
    return STEP;
  }

  getSteps(userUID) {
    const STEPS = this.afs.collection(`users/${userUID}/steps/`,
      ref => ref.where('projectKey', '==', this.projectKey)).valueChanges();
    return STEPS;
  }

  getTasks(userUID) {
    const TASKS = this.afs.collection(`users/${userUID}/tasks/`,
      ref => ref.where('projectKey', '==', this.projectKey)).valueChanges();
    return TASKS;
  }

  getTasksForStep(userUID, stepKey) {
    const STEPS = this.afs.collection(`users/${userUID}/tasks/`,
      ref => ref.where('stepKey', '==', stepKey)).valueChanges();
    return STEPS;
  }

  addStep(userUID, step) {
    const PUSHKEY = this.afs.createId();
    const STEP = {
      'pushKey': PUSHKEY,
      'projectKey': this.projectKey,
      'dateAdded': new Date().getTime(),
      'dueDate': new Date().setMonth(new Date().getMonth() + 3 ),
      'tasks': 0,
      'progress': 0,
      'isActiveThisWeek': false,
      ...step
    };
    console.log('From Service ' + STEP);
    this.afs.collection(`users/${userUID}/steps/`).doc(PUSHKEY).set(STEP);
  }

  addTask(userUID, task) {
    const PUSHKEY = this.afs.createId();
    const TASK = {
      'pushKey': PUSHKEY,
      'projectKey': this.projectKey,
      'isDone': false,
      'dateAdded': new Date().getTime(),
      ...task
    };
    this.afs.collection(`users/${userUID}/tasks/`).doc(PUSHKEY).set(TASK);
  }

  updateTask(userUID, taskKey, updatedTask) {
    this.afs.collection(`users/${userUID}/tasks/`).doc(taskKey).update(updatedTask);
  }

  updateStep(userUID, stepKey, updatedValues) {
    this.afs.collection(`users/${userUID}/steps`).doc(`${stepKey}`).update(updatedValues);
  }

}
