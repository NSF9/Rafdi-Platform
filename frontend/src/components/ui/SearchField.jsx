import { inputFieldBaseClassName, inputFieldLabelClassName } from './InputField'

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" strokeLinecap="round" />
    </svg>
  )
}

export function SearchField({ label, className = '', inputClassName = '', dir = 'auto', ...props }) {
  return (
    <label className={`block ${className}`}>
      {label ? <span className={inputFieldLabelClassName}>{label}</span> : null}
      <span className="relative block" dir={dir}>
        <span className="pointer-events-none absolute inset-y-0 start-4 flex items-center text-slate-400">
          <SearchIcon />
        </span>
        <input
          type="search"
          dir={dir}
          className={`${inputFieldBaseClassName} py-3 ps-12 pe-4 ${inputClassName}`}
          {...props}
        />
      </span>
    </label>
  )
}
