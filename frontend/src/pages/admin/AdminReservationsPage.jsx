import { useState } from 'react'
import { DataTable } from '../../components/ui/DataTable'
import { FilterBar } from '../../components/ui/FilterBar'
import { PageHeader } from '../../components/ui/PageHeader'
import { SearchField } from '../../components/ui/SearchField'
import { StatusBadge } from '../../components/ui/StatusBadge'
import { adminReservations } from '../../data/adminMockData'
import { getStatusTone } from '../../utils/statusTone'

function formatCurrency(value) {
  return `${value.toLocaleString('en-US')} SAR`
}

export default function AdminReservationsPage() {
  const [searchValue, setSearchValue] = useState('')

  const filteredReservations = adminReservations.filter((reservation) => {
    const normalizedQuery = searchValue.trim().toLowerCase()

    if (!normalizedQuery) {
      return true
    }

    return [reservation.reservationNumber, reservation.warehouseName, reservation.renterCompanyName]
      .join(' ')
      .toLowerCase()
      .includes(normalizedQuery)
  })

  const columns = [
    {
      key: 'renterCompanyName',
      header: 'المستأجر',
      render: (reservation) => (
        <div className="text-start">
          <p className="font-semibold text-rafdi-dark">{reservation.renterCompanyName}</p>
          <p className="mt-1 text-xs text-slate-400">ID: {reservation.reservationNumber}</p>
        </div>
      ),
    },
    { key: 'warehouseName', header: 'المستودع' },
    {
      key: 'monthlyRateSar',
      header: 'قيمة الإيجار',
      render: (reservation) => <span className="font-semibold text-rafdi-dark">{formatCurrency(reservation.monthlyRateSar)}</span>,
    },
    {
      key: 'renterFees',
      header: 'رسوم المستأجر (5%)',
      render: (reservation) => <span className="font-semibold text-rafdi-primary">{formatCurrency(Math.round(reservation.monthlyRateSar * 0.05))}</span>,
    },
    {
      key: 'ownerFees',
      header: 'رسوم المالك (7%)',
      render: (reservation) => <span className="font-semibold text-rafdi-error">{formatCurrency(Math.round(reservation.monthlyRateSar * 0.07))}</span>,
    },
    {
      key: 'platformRevenue',
      header: 'دخل المنصة',
      cellClassName: 'bg-emerald-50/70',
      render: (reservation) => (
        <span className="font-semibold text-rafdi-success">{formatCurrency(Math.round(reservation.monthlyRateSar * 0.12))}</span>
      ),
    },
    {
      key: 'status',
      header: 'الحالة',
      render: (reservation) => <StatusBadge tone={getStatusTone(reservation.status)}>{reservation.status}</StatusBadge>,
    },
    {
      key: 'paymentStatus',
      header: 'الدفع',
      render: (reservation) => <StatusBadge tone={getStatusTone(reservation.paymentStatus)}>{reservation.paymentStatus}</StatusBadge>,
    },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Reservations Ledger"
        title="إدارة الحجوزات"
        description="جميع الحجوزات والعمليات المالية المرتبطة بها مع إبراز دخل المنصة والرسوم المرتبطة بكل حجز."
      />

      <FilterBar fieldsClassName="md:grid-cols-1 xl:grid-cols-1">
        <SearchField
          label="بحث عن مستأجر أو مستودع أو رقم الحجز"
          placeholder="ابحث داخل سجل الحجوزات"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </FilterBar>

      <DataTable columns={columns} rows={filteredReservations} rowKey="id" />
    </div>
  )
}
