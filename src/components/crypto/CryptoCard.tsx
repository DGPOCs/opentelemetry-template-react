import type { Cryptocurrency } from '../../types/crypto'
import { formatCurrency, formatPercent, formatCompact } from '../../utils/format'

interface CryptoCardProps {
  crypto: Cryptocurrency
}

export function CryptoCard({ crypto }: CryptoCardProps) {
  const isPositive = crypto.percent_change_24h >= 0

  return (
    <article className="crypto-card" aria-label={`Cotización de ${crypto.name}`}>
      <header className="crypto-card__header">
        <div className="crypto-card__identity">
          <span className="crypto-card__rank">#{crypto.rank}</span>
          <div>
            <h3>{crypto.name}</h3>
            <span className="crypto-card__symbol">{crypto.symbol}</span>
          </div>
        </div>
        <span className={`trend-chip ${isPositive ? 'trend-chip--up' : 'trend-chip--down'}`}>
          {formatPercent(crypto.percent_change_24h)}
        </span>
      </header>
      <div className="crypto-card__body">
        <p className="crypto-card__price">{formatCurrency(crypto.price_usd)}</p>
        <div className="crypto-card__market">
          <span>Cap. mercado</span>
          <strong>{formatCompact(crypto.market_cap_usd)}</strong>
        </div>
        <div className="crypto-card__progress" aria-hidden="true">
          <div
            className={`crypto-card__progress-bar ${isPositive ? 'is-positive' : 'is-negative'}`}
            style={{ width: `${Math.min(Math.abs(crypto.percent_change_24h) * 5, 100)}%` }}
          />
        </div>
      </div>
    </article>
  )
}
