import type { Cryptocurrency } from '../../types/crypto';
import { Card } from '../shared/Card';
import { formatCompactNumber, formatCurrency, formatPercent } from '../../utils/format';
import clsx from 'clsx';

interface CryptoCardProps {
  crypto: Cryptocurrency;
  highlight?: boolean;
}

export function CryptoCard({ crypto, highlight = false }: CryptoCardProps) {
  const isPositive = crypto.percent_change_24h >= 0;
  const changeLabel = `${isPositive ? '▲' : '▼'} ${formatPercent(crypto.percent_change_24h)}`;
  const changeWidth = Math.min(Math.abs(crypto.percent_change_24h) * 2, 100);

  return (
    <Card variant={highlight ? 'highlight' : 'default'}>
      <div className="crypto-card">
        <header className="crypto-card__header">
          <span className="crypto-card__rank">#{crypto.rank}</span>
          <div>
            <h3 className="crypto-card__name">{crypto.name}</h3>
            <span className="crypto-card__symbol">{crypto.symbol}</span>
          </div>
        </header>
        <div className="crypto-card__price">{formatCurrency(crypto.price_usd)}</div>
        <div className="crypto-card__meta">
          <div className={clsx('crypto-card__change', isPositive ? 'is-up' : 'is-down')}>
            {changeLabel}
          </div>
          <div className="crypto-card__marketcap">
            <span>Cap. mercado</span>
            <strong>{formatCompactNumber(crypto.market_cap_usd)}</strong>
          </div>
        </div>
        <div className="crypto-card__indicator" aria-hidden>
          <div
            className={clsx('crypto-card__indicator-bar', isPositive ? 'is-up' : 'is-down')}
            style={{ width: `${changeWidth}%` }}
          />
        </div>
      </div>
    </Card>
  );
}
