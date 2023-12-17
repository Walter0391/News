import { Injectable } from '@angular/core';
import { LogUser } from '../models/login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(public http: HttpClient) {}

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
}
