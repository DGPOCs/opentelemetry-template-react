export interface DevToUser {
  name: string;
  username: string;
}

export interface DevToArticle {
  id: number;
  title: string;
  url: string;
  description: string;
  published_at: string;
  tags: string;
  user: DevToUser;
}

export interface NewsResponse {
  source: string;
  tag: string;
  count: number;
  articles: DevToArticle[];
}
