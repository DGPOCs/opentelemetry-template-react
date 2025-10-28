const currencyFormatter = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
});

const compactNumberFormatter = new Intl.NumberFormat('es-ES', {
  notation: 'compact',
  maximumFractionDigits: 2,
});

const percentFormatter = new Intl.NumberFormat('es-ES', {
  style: 'percent',
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

const relativeTimeFormatter = new Intl.RelativeTimeFormat('es', { numeric: 'auto' });

export function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}

export function formatCompactNumber(value: number) {
  return compactNumberFormatter.format(value);
}

export function formatPercent(value: number) {
  return percentFormatter.format(value / 100);
}

export function formatRelativeDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  const diffInSeconds = Math.round((parsed.getTime() - Date.now()) / 1000);
  const absSeconds = Math.abs(diffInSeconds);

  if (absSeconds < 60) {
    return relativeTimeFormatter.format(Math.round(diffInSeconds), 'second');
  }

  if (absSeconds < 3600) {
    return relativeTimeFormatter.format(Math.round(diffInSeconds / 60), 'minute');
  }

  if (absSeconds < 86400) {
    return relativeTimeFormatter.format(Math.round(diffInSeconds / 3600), 'hour');
  }

  if (absSeconds < 604800) {
    return relativeTimeFormatter.format(Math.round(diffInSeconds / 86400), 'day');
  }

  return relativeTimeFormatter.format(Math.round(diffInSeconds / 604800), 'week');
}

export function formatFullDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleString('es-ES', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
}
