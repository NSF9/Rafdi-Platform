import { EmptyState } from './EmptyState'

const alignmentClasses = {
  start: 'text-start',
  center: 'text-center',
  end: 'text-end',
}

function getAlignmentClass(align = 'start') {
  return alignmentClasses[align] || alignmentClasses.start
}

function resolveClassName(value, ...args) {
  return typeof value === 'function' ? value(...args) : value || ''
}

export function DataTable({ columns, rows, rowKey, emptyState, className = '', rowClassName, rowProps }) {
  const getRowKey = (row, index) => {
    if (typeof rowKey === 'function') {
      return rowKey(row)
    }

    if (typeof rowKey === 'string') {
      return row[rowKey]
    }

    return index
  }

  return (
    <div className={`overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-panel ${className}`}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px]">
          <thead className="bg-slate-50 text-sm text-slate-500">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className={`px-5 py-4 font-semibold ${getAlignmentClass(column.align)} ${resolveClassName(column.headerClassName, column)}`}
                  style={column.width ? { width: column.width } : undefined}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length ? (
              rows.map((row, index) => {
                const resolvedRowProps = typeof rowProps === 'function' ? rowProps(row, index) || {} : rowProps || {}
                const { className: resolvedRowPropsClassName = '', ...restRowProps } = resolvedRowProps

                return (
                  <tr
                    key={getRowKey(row, index)}
                    className={`border-t border-slate-100 text-sm text-slate-600 ${resolveClassName(rowClassName, row, index)} ${resolvedRowPropsClassName}`}
                    {...restRowProps}
                  >
                    {columns.map((column) => {
                      const content = column.render ? column.render(row, index) : row[column.key]

                      return (
                        <td
                          key={column.key}
                          className={`px-5 py-4 align-middle ${getAlignmentClass(column.align)} ${resolveClassName(column.cellClassName, row, index, column)}`}
                        >
                          {content}
                        </td>
                      )
                    })}
                  </tr>
                )
              })
            ) : (
              <tr>
                <td colSpan={columns.length} className="p-6">
                  {emptyState || <EmptyState title="لا توجد بيانات بعد" description="ستظهر النتائج هنا عند توفرها." />}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
