export function LoadingState({ message = 'Cargando...' }: { message?: string }) {
  return (
    <div className="state state--loading" role="status" aria-live="polite">
      <span className="spinner" aria-hidden />
      <span>{message}</span>
    </div>
  );
}
