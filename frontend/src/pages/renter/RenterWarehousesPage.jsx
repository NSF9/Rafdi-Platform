import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button'
import { DataTable } from '../../components/ui/DataTable'
import { PageHeader } from '../../components/ui/PageHeader'
import { StatusBadge } from '../../components/ui/StatusBadge'
import { appRoutes } from '../../constants/routes'
import { renterWarehouseCatalog } from '../../data/renterMockData'
import { getStatusTone } from '../../utils/statusTone'

function formatCurrency(value) {
  return `${value.toLocaleString('en-US')} SAR`
}

export default function RenterWarehousesPage() {
  const columns = [
    {
      key: 'name',
      header: 'اسم المستودع',
      render: (warehouse) => <span className="font-semibold text-rafdi-dark">{warehouse.name}</span>,
    },
    {
      key: 'location',
      header: 'الموقع',
      render: (warehouse) => `${warehouse.city} - ${warehouse.district}`,
    },
    {
      key: 'sizeSqm',
      header: 'المساحة (م2)',
      render: (warehouse) => <span className="font-semibold text-rafdi-dark">{warehouse.sizeSqm.toLocaleString()}</span>,
    },
    {
      key: 'monthlyRateSar',
      header: 'السعر/الشهر',
      render: (warehouse) => <span className="font-semibold text-rafdi-primary">{formatCurrency(warehouse.monthlyRateSar)}</span>,
    },
    {
      key: 'availableFrom',
      header: 'متاح من',
      render: (warehouse) => <span dir="ltr">{warehouse.availableFrom}</span>,
    },
    {
      key: 'status',
      header: 'الحالة',
      render: (warehouse) => <StatusBadge tone={getStatusTone(warehouse.status)}>{warehouse.status}</StatusBadge>,
    },
    {
      key: 'actions',
      header: 'الإجراءات',
      align: 'center',
      render: (warehouse) => (
        <div className="flex items-center justify-center gap-2">
          <Button
            as={Link}
            to={appRoutes.renter.warehouseDetails.replace(':warehouseId', warehouse.id)}
            className="px-4 py-2 text-xs"
          >
            عرض التفاصيل
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Warehouse Catalog"
        title="استكشاف المستودعات"
        description="تصفح المستودعات المتاحة للإيجار واختر ما يناسب احتياجاتك اللوجستية."
      />

      <DataTable columns={columns} rows={renterWarehouseCatalog} rowKey="id" />
    </div>
  )
}
