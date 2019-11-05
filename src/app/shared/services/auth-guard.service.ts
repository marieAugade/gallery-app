import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
        return true;
    }

    // navigate to login page
    this.router.navigate(['']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }
}
