import { useState } from 'react'
import { DataTable } from '../../components/ui/DataTable'
import { PageHeader } from '../../components/ui/PageHeader'
import { StatusBadge } from '../../components/ui/StatusBadge'
import { ownerBookings } from '../../data/ownerMockData'
import { getStatusTone } from '../../utils/statusTone'

function formatCurrency(value) {
  return `${value.toLocaleString('en-US')} SAR`
}

function formatDateRange(startDate, endDate) {
  return `${startDate} - ${endDate}`
}

export default function OwnerBookingsPage() {
  const [searchValue, setSearchValue] = useState('')

  const filteredBookings = ownerBookings.filter((booking) => {
    const normalizedQuery = searchValue.trim().toLowerCase()

    if (!normalizedQuery) {
      return true
    }

    return [booking.warehouseName, booking.renterCompanyName, booking.id].join(' ').toLowerCase().includes(normalizedQuery)
  })

  const columns = [
    {
      key: 'renterCompanyName',
      header: 'الشركة المستأجرة',
      render: (booking) => (
        <div className="text-start">
          <p className="font-semibold text-rafdi-dark">{booking.renterCompanyName}</p>
          <p className="mt-1 text-xs text-slate-400">{booking.id}</p>
        </div>
      ),
    },
    { key: 'warehouseName', header: 'المستودع' },
    {
      key: 'dateRange',
      header: 'التاريخ',
      render: (booking) => <span dir="ltr">{formatDateRange(booking.startDate, booking.endDate)}</span>,
    },
    {
      key: 'monthlyRateSar',
      header: 'الإيجار الشهري',
      render: (booking) => <span className="font-semibold text-rafdi-dark">{formatCurrency(booking.monthlyRateSar)}</span>,
    },
    {
      key: 'totalAmountSar',
      header: 'إجمالي الحجز',
      render: (booking) => <span className="font-semibold text-rafdi-dark">{formatCurrency(booking.totalAmountSar)}</span>,
    },
    {
      key: 'platformFeeSar',
      header: 'رسوم المنصة (7%)',
      render: (booking) => <span className="font-semibold text-rafdi-error">{formatCurrency(booking.platformFeeSar)}</span>,
    },
    {
      key: 'ownerNetSar',
      header: 'صافي الربح',
      render: (booking) => <span className="font-semibold text-rafdi-success">{formatCurrency(booking.ownerNetSar)}</span>,
    },
    {
      key: 'status',
      header: 'حالة الحجز',
      render: (booking) => <StatusBadge tone={getStatusTone(booking.status)}>{booking.status}</StatusBadge>,
    },
    {
      key: 'paymentStatus',
      header: 'الدفع',
      render: (booking) => <StatusBadge tone={getStatusTone(booking.paymentStatus)}>{booking.paymentStatus}</StatusBadge>,
    },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Bookings Ledger"
        title="الحجوزات والمدفوعات"
        description="عرض طلبات التأجير المرتبطة بمستودعاتك مع إبراز الرسوم وصافي الدخل وحالة السداد."
      />

      <DataTable columns={columns} rows={filteredBookings} rowKey="id" />
    </div>
  )
}
