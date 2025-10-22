import type { NewsArticle } from '../../types/news';
import { Card } from '../shared/Card';
import { formatFullDate, formatRelativeDate } from '../../utils/format';

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  const tagList = article.tags
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

  return (
    <Card>
      <article className="news-card">
        <header className="news-card__header">
          <span className="news-card__author">Por {article.user.name}</span>
          <time className="news-card__date" dateTime={article.published_at} title={formatFullDate(article.published_at)}>
            {formatRelativeDate(article.published_at)}
          </time>
        </header>
        <h3 className="news-card__title">
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            {article.title}
          </a>
        </h3>
        <p className="news-card__description">{article.description}</p>
        <footer className="news-card__footer">
          <div className="news-card__tags">
            {tagList.map((tag) => (
              <span key={tag} className="news-card__tag">
                #{tag}
              </span>
            ))}
          </div>
          <a className="button" href={article.url} target="_blank" rel="noopener noreferrer">
            Leer artículo
          </a>
        </footer>
      </article>
    </Card>
  );
}
