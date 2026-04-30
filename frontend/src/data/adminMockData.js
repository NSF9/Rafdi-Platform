import { statusValues } from '../constants/status'

export const adminSummaryMetrics = [
  { id: 'companies', label: 'إجمالي الشركات', value: 42, changeLabel: '+6 هذا الشهر' },
  { id: 'warehouses', label: 'المستودعات النشطة', value: 26, changeLabel: '+3 بعد المراجعة' },
  { id: 'reservations', label: 'الحجوزات الجارية', value: 18, changeLabel: '5 بحاجة متابعة' },
  { id: 'revenue', label: 'القيمة الشهرية', value: '412,000 SAR', changeLabel: '+12%' },
]

export const adminMetrics = adminSummaryMetrics

export const adminCompanies = [
  {
    id: 'company-msar',
    name: 'شركة المسار التجاري',
    city: 'الرياض',
    status: statusValues.pendingReview,
    warehousesCount: 4,
    activeReservationsCount: 7,
    joinedAt: '2026-03-05',
  },
  {
    id: 'company-imdad',
    name: 'شركة الإمداد الذكي',
    city: 'جدة',
    status: statusValues.suspended,
    warehousesCount: 2,
    activeReservationsCount: 1,
    joinedAt: '2025-11-18',
  },
  {
    id: 'company-rafed',
    name: 'شركة رافد الصناعية',
    city: 'الدمام',
    status: statusValues.active,
    warehousesCount: 6,
    activeReservationsCount: 10,
    joinedAt: '2025-08-22',
  },
]

export const adminWarehouses = [
  {
    id: 'wh-ramal',
    companyId: 'company-rafed',
    companyName: 'شركة رافد الصناعية',
    name: 'مستودع الرمال اللوجستي',
    city: 'الرياض',
    sizeSqm: 1200,
    occupancyRate: 0.92,
    monthlyRateSar: 12500,
    status: statusValues.active,
  },
  {
    id: 'wh-modern',
    companyId: 'company-msar',
    companyName: 'شركة المسار التجاري',
    name: 'مركز التخزين الحديث',
    city: 'جدة',
    sizeSqm: 900,
    occupancyRate: 0.41,
    monthlyRateSar: 9800,
    status: statusValues.pendingReview,
  },
  {
    id: 'wh-gate',
    companyId: 'company-rafed',
    companyName: 'شركة رافد الصناعية',
    name: 'مستودعات بوابة الشرق',
    city: 'الدمام',
    sizeSqm: 1500,
    occupancyRate: 0.88,
    monthlyRateSar: 18000,
    status: statusValues.active,
  },
]

export const adminReservations = [
  {
    id: 'res-1001',
    reservationNumber: 'RFD-1001',
    warehouseId: 'wh-ramal',
    warehouseName: 'مستودع الرمال اللوجستي',
    ownerCompanyName: 'شركة رافد الصناعية',
    renterCompanyName: 'شركة النخبة التجارية',
    startDate: '2026-04-01',
    endDate: '2026-09-30',
    monthlyRateSar: 12500,
    status: statusValues.active,
    paymentStatus: statusValues.paid,
  },
  {
    id: 'res-1002',
    reservationNumber: 'RFD-1002',
    warehouseId: 'wh-modern',
    warehouseName: 'مركز التخزين الحديث',
    ownerCompanyName: 'شركة المسار التجاري',
    renterCompanyName: 'شركة البيان السريع',
    startDate: '2026-05-15',
    endDate: '2026-11-14',
    monthlyRateSar: 9800,
    status: statusValues.pendingReview,
    paymentStatus: statusValues.pendingReview,
  },
]

export const adminProfile = {
  id: 'admin-01',
  companyName: 'منصة رفدي',
  commercialRegistration: '1010897654',
  fullName: 'نورة العتيبي',
  role: 'مشرف المنصة',
  email: 'nora@rafdi.sa',
  phone: '+966500000001',
  lastReviewAt: '2026-04-29T10:30:00Z',
}
