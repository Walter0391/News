/* export interface SearchResponse {
  status: string;
  sources: News[];
}

export interface News {
  id: string;
  name: string;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  category: string;
  language: string;
  country: string;
}
 */

export interface Root {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  source: Source;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id?: string;
  name: string;
}

export class NewNewsDto {
  constructor(
    public id: number,
    public name: string = '',
    public author: string = '',
    public title: string = '',
    public description: string = '',
    public url: string = '',
    public urlToImage: string = '',
    public category: string = '',
    public language: string = '',
    public country: string = ''
  ) {}
}
