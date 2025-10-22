import type { DevToArticle } from '../types/news';
import { NewsCard } from './NewsCard';

interface NewsListProps {
  articles: DevToArticle[];
}

export const NewsList = ({ articles }: NewsListProps) => (
  <div className="grid gap-6 md:grid-cols-2">
    {articles.map((article) => (
      <NewsCard key={article.id} article={article} />
    ))}
  </div>
);
