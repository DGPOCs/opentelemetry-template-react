import type { ReactNode } from 'react'
import type { NewsResponse } from '../../types/news'
import type { AsyncStatus } from '../../hooks/useAsyncData'
import { Section } from '../common/Section'
import { LoadingState } from '../common/LoadingState'
import { ErrorState } from '../common/ErrorState'
import { NewsCard } from './NewsCard'

interface NewsSectionProps {
  data: NewsResponse | null
  status: AsyncStatus
  error: string | null
  onRetry: () => void
}

export function NewsSection({ data, status, error, onRetry }: NewsSectionProps) {
  let content: ReactNode

  if (status === 'loading' && !data) {
    content = <LoadingState label="Buscando noticias frescas..." />
  } else if (status === 'error' && error) {
    content = <ErrorState message={error} onRetry={onRetry} />
  } else if (data?.articles?.length) {
    content = (
      <div className="grid grid--news">
        {data.articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    )
  } else {
    content = <p className="empty-state">No hay artículos disponibles por el momento.</p>
  }

  return (
    <Section
      title="Últimas noticias DEV.to"
      description={`Fuente: ${data?.source ?? 'DEV.to'} · Etiqueta: ${data?.tag ?? 'technology'}`}
      action={
        status === 'success' && (
          <button className="button button--ghost" type="button" onClick={onRetry}>
            Actualizar
          </button>
        )
      }
    >
      {content}
    </Section>
  )
}
