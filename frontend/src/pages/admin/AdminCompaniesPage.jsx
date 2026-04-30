import { useState } from 'react'
import Button from '../../components/ui/Button'
import { DataTable } from '../../components/ui/DataTable'
import { FilterBar } from '../../components/ui/FilterBar'
import { PageHeader } from '../../components/ui/PageHeader'
import { SearchField } from '../../components/ui/SearchField'
import { StatusBadge } from '../../components/ui/StatusBadge'
import { adminCompanies } from '../../data/adminMockData'
import { getStatusTone } from '../../utils/statusTone'

const companyMetaById = {
  'company-msar': { type: 'مالك', commercialRegistration: '1010101' },
  'company-imdad': { type: 'مستأجر', commercialRegistration: '2020202' },
  'company-rafed': { type: 'مستأجر', commercialRegistration: '3030303' },
}

export default function AdminCompaniesPage() {
  const [searchValue, setSearchValue] = useState('')

  const filteredCompanies = adminCompanies.filter((company) => {
    const normalizedQuery = searchValue.trim().toLowerCase()

    if (!normalizedQuery) {
      return true
    }

    return [company.name, company.city, companyMetaById[company.id]?.commercialRegistration || '']
      .some((value) => value.toLowerCase().includes(normalizedQuery))
  })

  const columns = [
    {
      key: 'name',
      header: 'اسم الشركة',
      render: (company) => (
        <div className="text-start">
          <p className="font-semibold text-rafdi-dark">{company.name}</p>
          <p className="mt-1 text-xs text-slate-400">{company.city}</p>
        </div>
      ),
    },
    {
      key: 'type',
      header: 'النوع',
      align: 'center',
      render: (company) => <StatusBadge tone="info">{companyMetaById[company.id]?.type || 'شركة'}</StatusBadge>,
    },
    {
      key: 'commercialRegistration',
      header: 'السجل التجاري',
      align: 'center',
      render: (company) => <span className="font-semibold text-slate-500">{companyMetaById[company.id]?.commercialRegistration || '-'}</span>,
    },
    {
      key: 'status',
      header: 'الحالة',
      render: (company) => <StatusBadge tone={getStatusTone(company.status)}>{company.status}</StatusBadge>,
    },
    {
      key: 'actions',
      header: 'إجراءات',
      align: 'center',
      render: (company) => (
        <div className="flex flex-wrap justify-center gap-2">
          <Button className="min-w-20 px-4 py-2 text-xs">قبول</Button>
          <Button variant="secondary" className="min-w-20 border-rafdi-error/20 text-rafdi-error px-4 py-2 text-xs">
            رفض
          </Button>
        </div>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Admin Companies"
        title="إدارة الشركات"
        description="إدارة واعتماد الشركات المنضمة للمنصة عبر جدول مراجعة مباشر يركز على الهوية التجارية وحالة الاعتماد."
      />

      <FilterBar fieldsClassName="md:grid-cols-1 xl:grid-cols-1">
        <SearchField
          label="بحث عن شركة أو سجل تجاري"
          placeholder="ابحث باسم الشركة أو السجل التجاري"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </FilterBar>

      <DataTable columns={columns} rows={filteredCompanies} rowKey="id" />
    </div>
  )
}
