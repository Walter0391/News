import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogUser, Login } from '../models/login.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(log: Login): Observable<LogUser> {
    return this.http.post<LogUser>(
      `${environment.JSON_SERVER_BASE_URL}/login`,
      log
    );
  }

  setLogUser(user: LogUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getLogUser(): LogUser | null {
    let userS = localStorage.getItem('user');

    if (userS != null) {
      let us: LogUser = JSON.parse(userS);
      return us;
    }

    return null;
  }

  get UserLogin(): boolean {
    return this.getLogUser() != null;
  }

  logout() {
    localStorage.removeItem('user');
  }
}
