import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/news.model';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(public ss: SearchService) {}

  ngOnInit(): void {}

  cerca() {}
}
