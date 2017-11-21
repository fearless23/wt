import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sts' })
export class StringSearchPipe implements PipeTransform {

  // targetedArray or Passed Array --- foo    -- baseProjects;
  // Passed value of text           --- value     -- learn painting;

  transform(passedArray: Array<any>, value: String) {
    if (passedArray && value) {
      return passedArray.filter(item => {
        const LOWERCASE_VALUE = value.toLowerCase();

        const NAME = (item.name || '').toLowerCase();
        const DESCRIPTION = (item.description || '').toLowerCase();

        const SEARCH_VALUE_MATCHES_NAME = NAME.indexOf(LOWERCASE_VALUE) !== -1;
        const SEARCH_VALUE_MATCHES_DESCRIPTION = DESCRIPTION.indexOf(LOWERCASE_VALUE) !== -1;
        return SEARCH_VALUE_MATCHES_NAME || SEARCH_VALUE_MATCHES_DESCRIPTION;
      });
    }
    return passedArray;

  }

  /*
  <input type="text" [(ngModel)]="search-term">

  <ng-container *ngFor="let project of ( projects | async | stringSearch: search-term )">

	  <div class="card-container">
		  Name: {{project.name}}<br>Description: {{project.description}} <br>Category: {{project.category}}<br>Type: {{project.type}}
	  </div>

  </ng-container>
  */


}
