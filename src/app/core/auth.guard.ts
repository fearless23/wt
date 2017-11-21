import { Injectable } from '@angular/core';

import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';
import { map, tap, take } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  canActivate() {
    const AUTH_STATE = this.afAuth.authState.pipe(
      take(1),
      map(state => !!state),
      tap(authenticated => {
        if (!authenticated) {
          console.log('Auth Guard: Not authenticated, redirecting to Login');
          this.router.navigateByUrl('/login');
        } else {
          console.log('Auth Guard: Authentication Status: ' + authenticated);
        }
      })
    );
    return AUTH_STATE;
  }

}
