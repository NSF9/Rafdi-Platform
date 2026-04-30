export const inputFieldLabelClassName = 'mb-2 block text-sm font-medium text-slate-500'

export const inputFieldBaseClassName =
  'w-full rounded-2xl border border-slate-200 bg-slate-50 text-start outline-none transition focus-visible:border-rafdi-light focus-visible:ring-4 focus-visible:ring-rafdi-light/15'

export function InputField({ label, type = 'text', placeholder, className = '', dir = 'auto', ...props }) {
  return (
    <label className="block">
      {label ? <span className={inputFieldLabelClassName}>{label}</span> : null}
      <input
        type={type}
        placeholder={placeholder}
        dir={dir}
        className={`${inputFieldBaseClassName} px-4 py-3 ${className}`}
        {...props}
      />
    </label>
  )
}
