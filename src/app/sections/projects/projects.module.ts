// Angular Module Decorator
import { NgModule } from '@angular/core';

// Shared Module : Forms, common
import { SharedModule} from '../../shared/shared.module';

// Routing Module and Components
import { ProjectsRoutingModule, rc } from './projects.routing';

// Services, Pipes, Other
import { ProjectsService } from './projects.service';
import { UserService } from '../../core/user.service';


@NgModule({
  imports: [ SharedModule, ProjectsRoutingModule ],
  declarations: [rc],
  providers: [ ProjectsService ]
})

export class ProjectsModule { }
