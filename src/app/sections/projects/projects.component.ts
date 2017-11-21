import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProjectsService } from './projects.service';
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  categories = ['All', 'Base', 'Personal', 'Pro', 'Social'];
  selectedCategory: String = 'All'; // Initiated
  cat; // Category Filter
  term; // Search Term
  type; // Type Filter
  userUID: String;
  projects: Observable<any>;

  constructor(private userService: UserService, private ps: ProjectsService) { }

  ngOnInit() {
    this.userService.user.subscribe(user => {
      this.userUID = user.uid;
      this.projects = this.ps.getAllProjects(user.uid);
    });
  }

  filterProjects(category) {
    if (!category) {
      return;
    }
    this.selectedCategory = category;
    this.cat = category.toLowerCase();
    this.term = '';
    this.type = '';
  }

}
