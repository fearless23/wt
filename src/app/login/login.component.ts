import { Component} from '@angular/core';
import { LoginService } from '../core/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(public loginService: LoginService) { }

  loginGoogle() {
    this.loginService.googleLogin();
  }


}
