import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AlertsService } from './../../core/alerts.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class ProjectsService {

  constructor(
    private afs: AngularFirestore,
    private alertsService: AlertsService,
    private router: Router
  ) { }

  getProjects(userUID, category) {
    const projects = this.afs.collection(
      'users/' + userUID + '/projects',
      ref => ref.where('category', '==', category)).valueChanges();
    return projects;
  }

  getAllProjects(userUID) {
    const projects = this.afs.collection(
      'users/' + userUID + '/projects').valueChanges();
    return projects;
  }

  addProject(userUID, projectData ) {
    const PUSHKEY = this.afs.createId();
    const PROJECT = {
      'pushKey': PUSHKEY,
      'dateAdded': new Date().getTime(),
      'steps': 0,
      'tasks': 0,
      'progress': 0,
      'isActiveThisWeek': false,
      ...projectData
    };
    this.afs.collection(
      'users/' + userUID + '/projects').doc(PUSHKEY).set(PROJECT);
    this.alertsService.alert('success', 'Project has been Created', true);
    this.router.navigateByUrl('projects');
  }
}

