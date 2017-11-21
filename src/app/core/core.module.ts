import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { LoginService } from './login.service';
import { UserService } from './user.service';
import { AlertsService } from './alerts.service';

@NgModule({
  providers: [AuthGuard, LoginService, UserService, AlertsService]
})

export class CoreModule { }
