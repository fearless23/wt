import { NgModule } from '@angular/core';

// Shared Module : Forms, common
import { SharedModule } from '../../shared/shared.module';

// Routing Module and Components
import { AddStuffRoutingModule, rc } from './add-stuff.routing';

// Services, Pipes, Other
import { AddStuffService } from './add-stuff.service';
// import { UserService } from '../../core/user.service';


@NgModule({
  imports: [SharedModule, AddStuffRoutingModule],
  declarations: [rc],
  providers: [AddStuffService]
})

export class AddStuffModule { }
