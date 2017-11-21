import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ProjectService } from '../project.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-project-overview',
  templateUrl: './overview.component.html'
})
export class ProjectOverviewComponent implements OnInit {

  project: Observable<any>;
  // projectKey;

  constructor(
    private mps: ProjectService,
    private afa: AngularFireAuth
  ) {}

  ngOnInit() {
    // this.activatedRoute.parent.params.subscribe( params => this.projectKey = params['id']);
    this.afa.authState.subscribe( user => {
      this.project = this.mps.getProject(user.uid);
    });
    // this.projectKey = this.mps.projectKey;
    // console.log('From Child Component: ' + this.projectKey);
  }

}
