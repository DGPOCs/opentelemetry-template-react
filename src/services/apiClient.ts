import { DEFAULT_REQUEST_TIMEOUT } from '../config/env';
import { trace, context, propagation } from '@opentelemetry/api';
const tracer = trace.getTracer('api-client');


type FetchOptions = RequestInit & { timeoutMs?: number };

export async function fetchJson<T>(
  url: string,
  { timeoutMs = DEFAULT_REQUEST_TIMEOUT, ...init }: FetchOptions = {},
): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  const span = tracer.startSpan('api.request');
  span.setAttribute('http.url', url);
  let response;
  try {
    // Add the current trace context to the headers
    const headers = init?.headers || {};
    const newHeaders = { ...headers };
    
    propagation.inject(context.active(), newHeaders);

     response = await fetch(url, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...newHeaders,
      },
      signal: controller.signal,
    });
    if (!response?.ok) {
      throw new Error(`Request to ${url} failed with status ${response.status}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    span.setAttribute('error', true);
    if ((error as Error).message) {
      span.setAttribute('error.message', (error as Error).message || 'Unknown error');
    }
    if ((error as Error).name === 'AbortError') {
      throw new Error(`Request to ${url} timed out after ${timeoutMs}ms`);
    }

    throw error;
  } finally {
    span.setAttribute('http.status_code', response?.status || 0);
    span.end();
    clearTimeout(timer);
  }
}
