import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-my-project',
  template: `
    <div class="fbox-sb p-x p-t bg-white2">
      <h2>{{(project | async)?.name}}</h2>
      <button class="btn btn-white" routerLink="add">Create Project</button>
    </div>
    <ul class="tabs">
      <li class="tab" routerLink="overview"
      routerLinkActive="active"
      [routerLinkActiveOptions] ="{exact: true}">Overview</li>
      <li class="tab" routerLink="list"
      routerLinkActive="active"
      [routerLinkActiveOptions] ="{exact: true}">List</li>
      <li class="tab" routerLink="steps"
      routerLinkActive="active"
      [routerLinkActiveOptions] ="{exact: true}">Steps</li>
      <li class="tab" routerLink="apps"
      routerLinkActive="active"
      [routerLinkActiveOptions] ="{exact: true}">Apps</li>
    </ul>

    <router-outlet></router-outlet>`,
    providers: [ProjectService]
})

export class ProjectComponent implements OnInit {
  // projectKey: String;
  project: Observable<any>;

  constructor(
    private afa: AngularFireAuth,
    private activatedRoute: ActivatedRoute,
    private mps: ProjectService
  ) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(params => this.projectKey = params['id']);
    this.afa.authState.subscribe(user => {
      this.project = this.mps.getProject(user.uid);
    });
    // this.projectKey = this.mps.projectKey;
    // console.log('From Component: ' + this.projectKey);
  }

}
