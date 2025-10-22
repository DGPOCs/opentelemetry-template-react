export function LoadingState({ label }: { label?: string }) {
  return (
    <div className="loading-state" role="status" aria-live="polite">
      <span className="loading-state__spinner" />
      <span>{label ?? 'Cargando información...'}</span>
    </div>
  )
}
