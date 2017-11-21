import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SettingsService {

  constructor(private afs: AngularFirestore) { }

  // getProjects(userUID, category) {
  //   const projects = this.afs.collection(
  //     'users/' + userUID + '/projects',
  //     ref => ref.where('category', '==', category)).valueChanges();
  //   return projects;
  // }

  // getAllProjects(userUID) {
  //   const projects = this.afs.collection(
  //     'users/' + userUID + '/projects').valueChanges();
  //   return projects;
  // }
}

