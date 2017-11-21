import { Component } from '@angular/core';
import { AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  styleUrls: ['./nav.css']
})

export class NavComponent {
  menuToggle = false;
  userName;
  userPhoto;

  constructor(private afa: AngularFireAuth) {

    afa.authState.subscribe(data => {
      if (data) {
        this.userName = data.displayName;
        this.userPhoto = data.photoURL;
      }
    });

  }

  onClickOutsideMainMenu(e) {
    this.menuToggle = false;
  }
}
