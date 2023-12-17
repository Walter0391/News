import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginDto = new Login();

  constructor(private ls: LoginService, private router: Router) {}

  login() {
    this.ls.login(this.loginDto).subscribe((logUser) => {
      this.ls.setLogUser(logUser);
      this.router.navigate(['']);
    });
  }
}
