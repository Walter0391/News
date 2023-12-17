import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../models/news.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(public http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'X-Api-Key': environment.NEWS_API_KEY,
    }),
  };

  search(): Observable<Root> {
    return this.http.get<Root>(
      `${environment.NEWS_API_BASE_URL}/everything?q=italia`,
      this.httpOptions
    );
  }
}
