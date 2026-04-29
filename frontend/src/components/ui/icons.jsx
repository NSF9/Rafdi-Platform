export function WarehouseIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 20V9.8c0-.5.2-.9.6-1.2l6-4.9c.8-.6 1.9-.6 2.7 0l6 4.9c.4.3.6.7.6 1.2V20" />
      <path d="M9 20v-4.5c0-.8.7-1.5 1.5-1.5h3c.8 0 1.5.7 1.5 1.5V20" />
      <path d="M8 11h.01M12 11h.01M16 11h.01" strokeLinecap="round" />
    </svg>
  )
}

export function MailIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
      <path d="m5 8 7 5 7-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function LockIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7.5 11V8.8a4.5 4.5 0 1 1 9 0V11" />
      <rect x="5" y="11" width="14" height="9" rx="2.5" />
    </svg>
  )
}
