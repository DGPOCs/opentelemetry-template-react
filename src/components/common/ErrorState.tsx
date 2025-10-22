interface ErrorStateProps {
  message: string
  onRetry?: () => void
}

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <div className="error-state" role="alert">
      <p>{message}</p>
      {onRetry && (
        <button className="button button--ghost" onClick={onRetry} type="button">
          Reintentar
        </button>
      )}
    </div>
  )
}
