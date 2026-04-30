import { useParams, Link } from 'react-router-dom'
import Button from '../../components/ui/Button'
import { DataTable } from '../../components/ui/DataTable'
import { PageHeader } from '../../components/ui/PageHeader'
import { InfoCard } from '../../components/ui/InfoCard'
import { InfoRow } from '../../components/ui/InfoRow'
import { StatusBadge } from '../../components/ui/StatusBadge'
import { EmptyState } from '../../components/ui/EmptyState'
import { appRoutes } from '../../constants/routes'
import { renterWarehouseDetailsById, renterCheckoutDrafts } from '../../data/renterMockData'
import { getStatusTone } from '../../utils/statusTone'

function formatCurrency(value) {
  return `${value.toLocaleString('en-US')} SAR`
}

export default function RenterCheckoutPage() {
  const { warehouseId } = useParams()
  const warehouse = renterWarehouseDetailsById[warehouseId]
  const draft = renterCheckoutDrafts.find((d) => d.warehouseId === warehouseId)

  if (!warehouse) {
    return (
      <EmptyState
        title="المستودع غير موجود"
        description="لم نتمكن من العثور على المستودع المطلوب لإتمام الحجز."
        action={
          <Button as={Link} to={appRoutes.renter.warehouses}>
            العودة إلى المستودعات
          </Button>
        }
      />
    )
  }

  const totalAmount = draft ? draft.quotedMonthlyRateSar * draft.durationMonths : 0

  const checkoutColumns = [
    { key: 'item', header: 'البنود', render: (row) => <span className="font-semibold text-rafdi-dark">{row.item}</span> },
    { key: 'value', header: 'القيمة' },
  ]

  const checkoutRows = [
    { id: '1', item: 'السعر الشهري', value: formatCurrency(warehouse.monthlyRateSar) },
    { id: '2', item: 'المساحة المطلوبة', value: draft ? `${draft.requestedSqm.toLocaleString()} م2` : '---' },
    { id: '3', item: 'مدة الإيجار', value: draft ? `${draft.durationMonths} أشهر` : '---' },
    { id: '4', item: 'الإجمالي التقديري', value: formatCurrency(totalAmount) },
    { id: '5', item: 'حالة الطلب', value: <StatusBadge tone={getStatusTone(draft?.status)}>{draft?.status || '---'}</StatusBadge> },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Checkout"
        title="الدفع وإتمام الحجز"
        description="مراجعة تفاصيل المستودع والرسوم قبل التأكيد"
      />

      <InfoCard title={warehouse.name}>
        <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
          <InfoRow label="الموقع" value={`${warehouse.city} - ${warehouse.district}`} />
          <InfoRow label="المساحة الكلية" value={`${warehouse.sizeSqm.toLocaleString()} م2`} />
          <InfoRow label="السعر الشهري" value={formatCurrency(warehouse.monthlyRateSar)} valueClassName="text-rafdi-primary" />
          <InfoRow
            label="الحالة"
            value={<StatusBadge tone={getStatusTone(warehouse.status)}>{warehouse.status}</StatusBadge>}
          />
        </div>
      </InfoCard>

      <DataTable columns={checkoutColumns} rows={checkoutRows} rowKey="id" />

      <div className="flex justify-end gap-3">
        <Button as={Link} to={appRoutes.renter.warehouseDetails.replace(':warehouseId', warehouse.id)} variant="secondary">
          العودة للتفاصيل
        </Button>
        <Button className="min-w-40">تأكيد الحجز</Button>
      </div>
    </div>
  )
}
