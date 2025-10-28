export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div className="state state--error" role="alert">
      <span>⚠️ {message}</span>
      {onRetry ? (
        <button type="button" className="button button--ghost" onClick={onRetry}>
          Reintentar
        </button>
      ) : null}
    </div>
  );
}
