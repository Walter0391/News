import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponse } from '../models/news.model';
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

  search(): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(
      `${environment.NEWS_API_BASE_URL}/top-headlines/sources`,
      this.httpOptions
    );
  }
}
