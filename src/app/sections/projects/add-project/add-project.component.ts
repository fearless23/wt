import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from '../projects.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})

export class AddProjectComponent implements OnInit {

  userUID;
  addProjectForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private afa: AngularFireAuth,
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.addProjectForm = this.fb.group({
      'name': [null, Validators.required],
      'category': [null, Validators.required],
      'type': [null, Validators.required],
      'description': [null, Validators.compose([
        Validators.required,
        Validators.minLength(30),
        Validators.maxLength(300)
      ])],

    });

    this.afa.authState.subscribe(data => {
      if (data) {
        this.userUID = data.uid;
      }
    });
  }

  addProject(projectData) {
    this.projectsService.addProject(this.userUID, projectData);
  }



}


