import { DataTable } from '../../components/ui/DataTable'
import { PageHeader } from '../../components/ui/PageHeader'
import { StatusBadge } from '../../components/ui/StatusBadge'
import { renterBookings } from '../../data/renterMockData'
import { getStatusTone } from '../../utils/statusTone'

function formatCurrency(value) {
  return `${value.toLocaleString('en-US')} SAR`
}

function formatDateRange(startDate, endDate) {
  return `${startDate} - ${endDate}`
}

export default function RenterBookingsPage() {
  const columns = [
    { key: 'warehouseName', header: 'المستودع' },
    {
      key: 'ownerCompanyName',
      header: 'الشركة المالكة',
      render: (booking) => <span className="text-rafdi-dark">{booking.ownerCompanyName}</span>,
    },
    {
      key: 'dateRange',
      header: 'فترة الحجز',
      render: (booking) => <span dir="ltr">{formatDateRange(booking.startDate, booking.endDate)}</span>,
    },
    {
      key: 'reservedSqm',
      header: 'المساحة المحجوزة',
      render: (booking) => <span className="font-semibold text-rafdi-dark">{booking.reservedSqm.toLocaleString()} م2</span>,
    },
    {
      key: 'monthlyRateSar',
      header: 'الإيجار الشهري',
      render: (booking) => <span className="font-semibold text-rafdi-primary">{formatCurrency(booking.monthlyRateSar)}</span>,
    },
    {
      key: 'status',
      header: 'حالة الحجز',
      render: (booking) => <StatusBadge tone={getStatusTone(booking.status)}>{booking.status}</StatusBadge>,
    },
    {
      key: 'paymentStatus',
      header: 'حالة الدفع',
      render: (booking) => <StatusBadge tone={getStatusTone(booking.paymentStatus)}>{booking.paymentStatus}</StatusBadge>,
    },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="My Bookings"
        title="حجوزاتي"
        description="عرض الحجوزات الحالية والسابقة وحالة الدفع لكل حجز."
      />

      <DataTable columns={columns} rows={renterBookings} rowKey="id" />
    </div>
  )
}
