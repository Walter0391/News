import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(public ls: LoginService, private router: Router) {}

  logout() {
    this.ls.logout();
    this.router.navigate(['/home']);
  }
}
