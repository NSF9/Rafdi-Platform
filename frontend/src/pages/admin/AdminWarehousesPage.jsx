import Button from '../../components/ui/Button'
import { DataTable } from '../../components/ui/DataTable'
import { KpiCard } from '../../components/ui/KpiCard'
import { PageHeader } from '../../components/ui/PageHeader'
import { StatusBadge } from '../../components/ui/StatusBadge'
import { adminWarehouses } from '../../data/adminMockData'
import { getStatusTone } from '../../utils/statusTone'

function formatPercent(value) {
  return `${Math.round(value * 100)}%`
}

function average(values) {
  return values.length ? values.reduce((total, value) => total + value, 0) / values.length : 0
}

export default function AdminWarehousesPage() {
  const columns = [
    {
      key: 'name',
      header: 'المستودع',
      render: (warehouse) => (
        <div className="text-start">
          <p className="font-semibold text-rafdi-dark">{warehouse.name}</p>
          <p className="mt-1 text-xs text-slate-400">{warehouse.sizeSqm} م²</p>
        </div>
      ),
    },
    { key: 'companyName', header: 'المالك' },
    { key: 'city', header: 'الموقع' },
    {
      key: 'status',
      header: 'الحالة',
      render: (warehouse) => <StatusBadge tone={getStatusTone(warehouse.status)}>{warehouse.status}</StatusBadge>,
    },
    {
      key: 'occupancyRate',
      header: 'الإشغال',
      render: (warehouse) => (
        <div className="min-w-[140px]">
          <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
            <span>النسبة الحالية</span>
            <span>{formatPercent(warehouse.occupancyRate)}</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-rafdi-primary" style={{ width: formatPercent(warehouse.occupancyRate) }} />
          </div>
        </div>
      ),
    },
    {
      key: 'monthlyRateSar',
      header: 'السعر الشهري',
      render: (warehouse) => `${warehouse.monthlyRateSar.toLocaleString('en-US')} SAR`,
    },
    {
      key: 'actions',
      header: 'تحكم',
      align: 'center',
      render: (warehouse) => (
        <Button variant={warehouse.status === 'نشط' ? 'secondary' : 'primary'} className="px-4 py-2 text-xs">
          {warehouse.status === 'نشط' ? 'تعطيل' : 'اعتماد'}
        </Button>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Warehouse Control"
        title="إدارة المستودعات"
        description="عرض والتحكم في جميع مستودعات المنصة مع متابعة الجاهزية والإشغال وحالة الاعتماد."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <KpiCard label="المستودعات المعروضة" value={adminWarehouses.length} helper="داخل المساحة الحالية" />
        <KpiCard
          label="متوسط الإشغال"
          value={formatPercent(average(adminWarehouses.map((warehouse) => warehouse.occupancyRate)))}
          helper="معدل استخدام الوحدات"
          tone="soft"
        />
        <KpiCard
          label="قيمة الإيجار الشهرية"
          value={`${adminWarehouses.reduce((total, warehouse) => total + warehouse.monthlyRateSar, 0).toLocaleString('en-US')} SAR`}
          helper="إجمالي التسعير الشهري"
          tone="accent"
        />
      </div>

      <DataTable columns={columns} rows={adminWarehouses} rowKey="id" />
    </div>
  )
}
