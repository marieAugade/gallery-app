import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  // login hardcoded for demo
  private login = 'login1';
  private password = 'pwd';
  showAlert: boolean;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  checkLogin(login: HTMLInputElement, password: HTMLInputElement): boolean {
    if (this.login === login.value && this.password === password.value) {
      this.authService.setLoggedIn(true);
      this.router.navigate(['/gallery']);
    } else {
      this.showAlert = true;
    }
    return false;
  }

}
