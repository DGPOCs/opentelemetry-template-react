export interface NewsUser {
  name: string;
  username: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  url: string;
  description: string;
  published_at: string;
  tags: string;
  user: NewsUser;
}

export interface NewsResponse {
  source: string;
  tag: string;
  count: number;
  articles: NewsArticle[];
}
