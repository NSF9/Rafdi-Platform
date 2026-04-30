import { useParams, Link } from 'react-router-dom'
import Button from '../../components/ui/Button'
import { PageHeader } from '../../components/ui/PageHeader'
import { InfoCard } from '../../components/ui/InfoCard'
import { InfoRow } from '../../components/ui/InfoRow'
import { StatusBadge } from '../../components/ui/StatusBadge'
import { EmptyState } from '../../components/ui/EmptyState'
import { appRoutes } from '../../constants/routes'
import { renterWarehouseDetailsById } from '../../data/renterMockData'
import { getStatusTone } from '../../utils/statusTone'

function formatCurrency(value) {
  return `${value.toLocaleString('en-US')} SAR`
}

export default function RenterWarehouseDetailsPage() {
  const { warehouseId } = useParams()
  const warehouse = renterWarehouseDetailsById[warehouseId]

  if (!warehouse) {
    return (
      <EmptyState
        title="المستودع غير موجود"
        description="لم نتمكن من العثور على المستودع المطلوب. قد يكون قد أزيل أو الرابط غير صحيح."
        action={
          <Button as={Link} to={appRoutes.renter.warehouses}>
            العودة إلى المستودعات
          </Button>
        }
      />
    )
  }

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Warehouse Details"
        title={warehouse.name}
        description={`${warehouse.city} - ${warehouse.district}`}
        actions={
          <Button as={Link} to={appRoutes.renter.checkout.replace(':warehouseId', warehouse.id)} className="min-w-40">
            حجز المستودع
          </Button>
        }
      />

      <InfoCard title="معلومات المستودع">
        <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
          <InfoRow label="المدينة" value={warehouse.city} />
          <InfoRow label="الحي" value={warehouse.district} />
          <InfoRow label="العنوان" value={warehouse.address} />
          <InfoRow label="المساحة" value={`${warehouse.sizeSqm.toLocaleString()} م2`} />
          <InfoRow label="السعر الشهري" value={formatCurrency(warehouse.monthlyRateSar)} valueClassName="text-rafdi-primary" />
          <InfoRow
            label="الحالة"
            value={<StatusBadge tone={getStatusTone(warehouse.status)}>{warehouse.status}</StatusBadge>}
          />
        </div>
      </InfoCard>

      <InfoCard title="الوصف">
        <p className="text-sm leading-7 text-slate-600">{warehouse.description}</p>
      </InfoCard>

      <InfoCard title="الخدمات والميزات">
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-600">
          {warehouse.amenities.map((amenity) => (
            <li key={amenity}>{amenity}</li>
          ))}
        </ul>
      </InfoCard>

      <InfoCard title="جهة التأجير">
        <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
          <InfoRow label="الشركة المالكة" value={warehouse.ownerContact.companyName} />
          <InfoRow label="جهة الاتصال" value={warehouse.ownerContact.fullName} />
          <InfoRow label="البريد الإلكتروني" value={warehouse.ownerContact.email} />
          <InfoRow label="رقم الجوال" value={warehouse.ownerContact.phone} dir="ltr" />
        </div>
      </InfoCard>

      <InfoCard title="شروط العقد">
        <ul className="list-inside list-disc space-y-1 text-sm text-slate-600">
          {warehouse.contractTerms.map((term) => (
            <li key={term}>{term}</li>
          ))}
        </ul>
      </InfoCard>
    </div>
  )
}
