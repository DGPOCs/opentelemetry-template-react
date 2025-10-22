export interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  price_usd: number;
  percent_change_24h: number;
  market_cap_usd: number;
}

export interface CryptoResponse {
  data: Cryptocurrency[];
}
