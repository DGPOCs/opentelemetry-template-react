import { useComponentTracer } from '../../hooks/useTracer';
import type { NewsArticle } from '../../types/news';
import { NewsCard } from './NewsCard';

interface NewsListProps {
  items: NewsArticle[];
}

export function NewsList({ items }: NewsListProps) {
  useComponentTracer('NewsList');
  return (
    <div className="news-grid">
      {items.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
}
