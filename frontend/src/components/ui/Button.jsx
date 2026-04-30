export default function Button({ as: Comp = 'button', variant = 'primary', className = '', ...props }) {
  const styles =
    variant === 'secondary'
      ? 'border border-slate-200 bg-white text-rafdi-dark shadow-panel'
      : 'bg-rafdi-primary text-white shadow-soft'

  const buttonProps = Comp === 'button' && props.type === undefined ? { ...props, type: 'button' } : props

  return (
    <Comp
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-rafdi-light/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white ${styles} ${className}`}
      {...buttonProps}
    />
  )
}
