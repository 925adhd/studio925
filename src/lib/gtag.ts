export function trackEvent(action: string, label?: string) {
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag === 'function') {
    w.gtag('event', action, {
      event_label: label,
    });
  }
}
