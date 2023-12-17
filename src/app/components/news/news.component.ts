import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article, NewNewsDto } from 'src/app/models/news.model';
import { LoginService } from 'src/app/services/login.service';
import { NewsService } from 'src/app/services/news.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  model?: NewNewsDto;
  notizie: Article[] = [];

  constructor(
    public ns: NewsService,
    public ls: LoginService,
    public http: HttpClient
  ) {}
  private httpOptions = {
    headers: new HttpHeaders({
      'X-Api-Key': environment.NEWS_API_KEY,
    }),
  };

  ngOnInit(): void {
    if (this.ls.getLogUser() != null) {
      this.model = new NewNewsDto(this.ls.getLogUser()!.user.id);

      this.ns.search().subscribe((dati) => (this.notizie = dati.articles));
    }
  }

  openWindow(url: string) {
    window.open(url, '_blank');
  }
}
