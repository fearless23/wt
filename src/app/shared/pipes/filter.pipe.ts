import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {

  // targetedArray or Passed Array  --- foo    -- baseProjects;
  // Item in array has a property   --- property  -- title;
  // Passed value of text           --- value     -- learn painting;

  transform(foo: Array<any>, property: String, value?: String) {
    if (foo && value) {
      if (value === 'all') { return foo; }
      return foo.filter(item => item[`${property}`] === value);
    }
    return foo;
  }


}
