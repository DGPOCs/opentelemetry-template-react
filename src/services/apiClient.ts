import { DEFAULT_REQUEST_TIMEOUT } from '../config/env';

type FetchOptions = RequestInit & { timeoutMs?: number };

export async function fetchJson<T>(
  url: string,
  { timeoutMs = DEFAULT_REQUEST_TIMEOUT, ...init }: FetchOptions = {},
): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers ?? {}),
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Request to ${url} failed with status ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    if ((error as Error).name === 'AbortError') {
      throw new Error(`Request to ${url} timed out after ${timeoutMs}ms`);
    }

    throw error;
  } finally {
    clearTimeout(timer);
  }
}
