export function InputField({ label, type = 'text', placeholder, className = '', dir = 'auto', ...props }) {
  return (
    <label className="block">
      {label ? <span className="mb-2 block text-sm font-medium text-slate-500">{label}</span> : null}
      <input
        type={type}
        placeholder={placeholder}
        dir={dir}
        className={`w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-start outline-none transition focus:border-rafdi-light ${className}`}
        {...props}
      />
    </label>
  )
}
