import type { NewsArticle } from '../../types/news'
import { formatDate } from '../../utils/format'

interface NewsCardProps {
  article: NewsArticle
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="news-card">
      <header className="news-card__header">
        <a href={article.url} target="_blank" rel="noreferrer" className="news-card__title">
          {article.title}
        </a>
        <span className="news-card__date">{formatDate(article.published_at)}</span>
      </header>
      <p className="news-card__description">{article.description}</p>
      <footer className="news-card__footer">
        <div className="news-card__author">
          <span>{article.user.name}</span>
          <span className="news-card__username">@{article.user.username}</span>
        </div>
        <div className="news-card__tags">
          {article.tags.split(',').slice(0, 3).map((tag) => (
            <span key={tag} className="chip">
              #{tag.trim()}
            </span>
          ))}
        </div>
      </footer>
    </article>
  )
}
