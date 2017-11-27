import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../core/login.service';
import { UserService } from './../../core/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  userName: String;

  drop = false;
  dropNotification = false;
  dropProjectSelector = false;

  onClickOutside(event: Object) {
    this.drop = false;
  }

  onClickOutsideProjectSelector(e) {
    this.dropProjectSelector = false;
  }

  constructor(private userService: UserService, private loginService: LoginService) { }

  ngOnInit() {
    this.userService.user.subscribe(user => {
      if (user) { this.userName = user.displayName; }
    });
  }

  logout() {
    this.loginService.logout();
  }

}
