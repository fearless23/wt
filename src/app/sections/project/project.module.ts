import { NgModule } from '@angular/core';
import { SharedModule} from '../../shared/shared.module';
import { ProjectRoutingModule, rc } from './project.routing';
import { FormsModule} from '@angular/forms';
// Services, Pipes, Other
// import { MyProjectService } from './my-project.service';
import { UserService } from '../../core/user.service';

@NgModule({
  imports: [ SharedModule, ProjectRoutingModule, FormsModule ],
  declarations: [rc]
  // ,providers: [ MyProjectService ]
})

export class ProjectModule { }
