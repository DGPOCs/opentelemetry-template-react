import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { FiExternalLink } from 'react-icons/fi';
import type { NewsArticle } from '../types/news.ts';
import './NewsCard.css';

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  const publishedLabel = formatDistanceToNow(new Date(article.published_at), {
    locale: es,
    addSuffix: true
  });

  return (
    <article className="news-card">
      <header>
        <p className="news-card__meta">
          {article.user.name} · @{article.user.username} · {publishedLabel}
        </p>
        <h3>{article.title}</h3>
      </header>
      <p className="news-card__description">{article.description}</p>
      <footer className="news-card__footer">
        <span className="news-card__tags">{article.tags}</span>
        <a className="news-card__link" href={article.url} target="_blank" rel="noreferrer">
          Leer en DEV.to
          <FiExternalLink aria-hidden="true" />
        </a>
      </footer>
    </article>
  );
}
