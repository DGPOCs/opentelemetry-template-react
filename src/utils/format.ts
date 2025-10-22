const currencyFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
})

const compactFormatter = new Intl.NumberFormat('es-ES', {
  notation: 'compact',
  compactDisplay: 'short',
  maximumFractionDigits: 2,
})

export function formatCurrency(value: number): string {
  return currencyFormatter.format(value)
}

export function formatCompact(value: number): string {
  return compactFormatter.format(value)
}

export function formatPercent(value: number): string {
  const formatter = new Intl.NumberFormat('es-ES', {
    signDisplay: 'always',
    maximumFractionDigits: Math.abs(value) < 1 ? 2 : 1,
  })
  return `${formatter.format(value)}%`
}

export function formatDate(value: string): string {
  const date = new Date(value)
  return new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date)
}
