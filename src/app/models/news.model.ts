export interface SearchResponse {
  status: string;
  sources: News[];
}

export interface News {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export class NewNewsDto {
  constructor(
    public id: number,
    public name: string = '',
    public description: string = '',
    public url: string = '',
    public category: string = '',
    public language: string = '',
    public country: string = ''
  ) {}
}
