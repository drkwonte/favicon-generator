/**
 * Full-viewport loading state used for async steps (avatar AI, favicon pack build).
 */

type GeneratingSpinnerViewProps = {
  message: string
}

export function GeneratingSpinnerView({ message }: GeneratingSpinnerViewProps) {
  return (
    <div
      className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center gap-6 px-8"
      role="status"
      aria-live="polite"
    >
      <div
        className="h-14 w-14 animate-spin rounded-full border-4 border-primary/20 border-t-primary"
        aria-hidden="true"
      />
      <p className="font-headline text-lg font-semibold text-on-surface-variant">
        {message}
      </p>
    </div>
  )
}
