import { statusValues } from '../constants/status'

export const ownerProfile = {
  id: 'owner-01',
  companyId: 'company-rafed',
  companyName: 'شركة رافد الصناعية',
  commercialRegistration: '2051147789',
  avatarInitial: 'ع',
  fullName: 'عبدالله القحطاني',
  role: 'مدير المحافظ',
  city: 'الرياض',
  email: 'abdullah@rafdi.sa',
  phone: '+966500000002',
}

export const ownerSummaryMetrics = [
  { id: 'warehouses', label: 'المستودعات', value: 3, changeLabel: 'مستودع واحد غير نشط' },
  { id: 'activeBookings', label: 'الطلبات النشطة', value: 1, changeLabel: 'طلب واحد قيد المراجعة' },
  { id: 'monthlyRevenue', label: 'الإيراد الشهري', value: '40,500 SAR', changeLabel: '+8% عن الشهر الماضي' },
]

export const ownerWarehouses = [
  {
    id: 'wh-ramal',
    name: 'مستودع الرمال اللوجستي',
    city: 'الرياض',
    sizeSqm: 1200,
    availableSqm: 120,
    monthlyRateSar: 12500,
    occupancyRate: 0.92,
    status: statusValues.active,
  },
  {
    id: 'wh-gate',
    name: 'مستودعات بوابة الشرق',
    city: 'الدمام',
    sizeSqm: 1500,
    availableSqm: 220,
    monthlyRateSar: 18000,
    occupancyRate: 0.88,
    status: statusValues.active,
  },
  {
    id: 'wh-north',
    name: 'مستودع الشمال المبرد',
    city: 'الرياض',
    sizeSqm: 700,
    availableSqm: 700,
    monthlyRateSar: 9600,
    occupancyRate: 0,
    status: statusValues.inactive,
  },
]

export const ownerBookings = [
  {
    id: 'booking-2001',
    warehouseId: 'wh-ramal',
    warehouseName: 'مستودع الرمال اللوجستي',
    renterCompanyName: 'شركة النخبة التجارية',
    requestedSqm: 300,
    startDate: '2026-04-01',
    endDate: '2026-09-30',
    monthlyRateSar: 12500,
    totalAmountSar: 75000,
    platformFeeSar: 5250,
    ownerNetSar: 69750,
    status: statusValues.active,
    paymentStatus: statusValues.paid,
  },
  {
    id: 'booking-2002',
    warehouseId: 'wh-north',
    warehouseName: 'مستودع الشمال المبرد',
    renterCompanyName: 'شركة البيان السريع',
    requestedSqm: 250,
    startDate: '2026-05-20',
    endDate: '2026-12-19',
    monthlyRateSar: 9600,
    totalAmountSar: 67200,
    platformFeeSar: 4704,
    ownerNetSar: 62496,
    status: statusValues.pendingReview,
    paymentStatus: statusValues.pendingReview,
  },
]
