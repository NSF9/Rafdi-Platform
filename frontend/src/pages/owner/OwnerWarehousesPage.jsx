import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button'
import { DataTable } from '../../components/ui/DataTable'
import { PageHeader } from '../../components/ui/PageHeader'
import { StatusBadge } from '../../components/ui/StatusBadge'
import { appRoutes } from '../../constants/routes'
import { ownerWarehouses as initialWarehouses } from '../../data/ownerMockData'
import { getStatusTone } from '../../utils/statusTone'

function formatCurrency(value) {
  return `${value.toLocaleString('en-US')} SAR`
}

function formatPercent(value) {
  return `${Math.round(value * 100)}%`
}

export default function OwnerWarehousesPage() {
  const [warehouses, setWarehouses] = useState(initialWarehouses)
  const [warehousePendingRemovalId, setWarehousePendingRemovalId] = useState(null)

  function handleRemoveWarehouse(warehouseId) {
    setWarehouses((currentWarehouses) => currentWarehouses.filter((warehouse) => warehouse.id !== warehouseId))
    setWarehousePendingRemovalId(null)
  }

  function handleRequestRemoval(warehouseId) {
    setWarehousePendingRemovalId((currentValue) => (currentValue === warehouseId ? null : warehouseId))
  }

  const columns = [
    {
      key: 'name',
      header: 'اسم المستودع',
      render: (warehouse) => <span className="font-semibold text-rafdi-dark">{warehouse.name}</span>,
    },
    { key: 'city', header: 'الموقع' },
    {
      key: 'sizeSqm',
      header: 'المساحة (م2)',
      render: (warehouse) => <span className="font-semibold text-rafdi-dark">{warehouse.sizeSqm}</span>,
    },
    {
      key: 'monthlyRateSar',
      header: 'السعر/الشهر',
      render: (warehouse) => <span className="font-semibold text-rafdi-primary">{formatCurrency(warehouse.monthlyRateSar)}</span>,
    },
    {
      key: 'status',
      header: 'الحالة',
      render: (warehouse) => <StatusBadge tone={getStatusTone(warehouse.status)}>{warehouse.status}</StatusBadge>,
    },
    {
      key: 'actions',
      header: 'إجراءات',
      align: 'center',
      render: (warehouse) => {
        const isConfirmingRemoval = warehousePendingRemovalId === warehouse.id

        return (
          <div className="flex items-center justify-center gap-2">
            <Button
              as={Link}
              to={appRoutes.owner.warehouseEdit.replace(':warehouseId', warehouse.id)}
              variant="secondary"
              className="px-4 py-2 text-xs"
            >
              تعديل
            </Button>
            {isConfirmingRemoval ? (
              <>
                <Button className="px-4 py-2 text-xs" onClick={() => handleRemoveWarehouse(warehouse.id)}>
                  تأكيد الحذف
                </Button>
                <Button variant="secondary" className="px-4 py-2 text-xs" onClick={() => setWarehousePendingRemovalId(null)}>
                  إلغاء
                </Button>
              </>
            ) : (
              <Button variant="secondary" className="px-4 py-2 text-xs text-rafdi-error" onClick={() => handleRequestRemoval(warehouse.id)}>
                حذف
              </Button>
            )}
          </div>
        )
      },
    },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Warehouse Management"
        title="إدارة المستودعات"
        description="أضف وعدل مستودعاتك المعروضة مع متابعة المساحات المتاحة والتسعير وحالة التشغيل."
        actions={
          <Button as={Link} to={appRoutes.owner.warehousesNew} className="min-w-40">
            إضافة مستودع جديد
          </Button>
        }
      />

      <DataTable columns={columns} rows={warehouses} rowKey="id" />
    </div>
  )
}
