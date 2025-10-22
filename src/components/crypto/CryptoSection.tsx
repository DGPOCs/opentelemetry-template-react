import type { ReactNode } from 'react'
import type { CryptoResponse } from '../../types/crypto'
import type { AsyncStatus } from '../../hooks/useAsyncData'
import { Section } from '../common/Section'
import { LoadingState } from '../common/LoadingState'
import { ErrorState } from '../common/ErrorState'
import { CryptoCard } from './CryptoCard'

interface CryptoSectionProps {
  data: CryptoResponse | null
  status: AsyncStatus
  error: string | null
  onRetry: () => void
}

export function CryptoSection({ data, status, error, onRetry }: CryptoSectionProps) {
  let content: ReactNode

  if (status === 'loading' && !data) {
    content = <LoadingState label="Consultando cotizaciones..." />
  } else if (status === 'error' && error) {
    content = <ErrorState message={error} onRetry={onRetry} />
  } else if (data?.data?.length) {
    content = (
      <div className="grid grid--crypto">
        {data.data.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>
    )
  } else {
    content = <p className="empty-state">No se encontraron criptomonedas.</p>
  }

  return (
    <Section
      title="Top criptomonedas"
      description="Ranking en vivo de las cinco criptomonedas más negociadas según Coinlore."
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
