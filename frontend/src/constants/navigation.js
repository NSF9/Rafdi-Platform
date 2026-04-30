import { appRoutes } from './routes'

const shellTypes = {
  public: 'public',
  dashboard: 'dashboard',
}

export const adminRouteRegistry = [
  {
    path: appRoutes.admin.dashboard,
    title: 'لوحة تحكم المشرف',
    navLabel: 'لوحة التحكم',
    description: 'هذه الصفحة مخصصة لمتابعة مؤشرات المنصة وإدارة العمليات التشغيلية للمشرف.',
  },
  {
    path: appRoutes.admin.companies,
    title: 'إدارة الشركات',
    navLabel: 'الشركات',
    description: 'سيتم هنا عرض الشركات وطلبات الانضمام وأدوات المراجعة الخاصة بالمشرف.',
  },
  {
    path: appRoutes.admin.warehouses,
    title: 'إدارة المستودعات',
    navLabel: 'المستودعات',
    description: 'هذا المسار محجوز لقوائم المستودعات وأدوات التدقيق والإشراف المركزي.',
  },
  {
    path: appRoutes.admin.reservations,
    title: 'إدارة الحجوزات',
    navLabel: 'الحجوزات',
    description: 'ستظهر هنا متابعة الحجوزات والحالات والتدخلات الإدارية عند الحاجة.',
  },
  {
    path: appRoutes.admin.settings,
    title: 'إعدادات المنصة',
    navLabel: 'الإعدادات',
    description: 'هذا القسم سيجمع إعدادات النظام والصلاحيات والتفضيلات العامة للمشرف.',
  },
]

const ownerRouteRegistry = [
  {
    path: appRoutes.owner.warehouses,
    title: 'مستودعات المالك',
    navLabel: 'المستودعات',
    description: 'سيعرض هذا المسار مستودعات المالك وأدوات المتابعة والإدارة اليومية.',
  },
  {
    path: appRoutes.owner.warehousesNew,
    title: 'إضافة مستودع جديد',
    navLabel: 'إضافة مستودع',
    description: 'هذا المسار محجوز لنموذج إضافة مستودع جديد ضمن تجربة المالك.',
  },
  {
    path: appRoutes.owner.warehouseEdit,
    title: 'تعديل بيانات المستودع',
    description: 'سيتم استخدام هذا المسار لتحرير تفاصيل المستودع بناءً على المعرّف الموجود في الرابط.',
  },
  {
    path: appRoutes.owner.bookings,
    title: 'حجوزات المالك',
    navLabel: 'الحجوزات',
    description: 'هذه الصفحة ستجمع الحجوزات الواردة للمستودعات وإجراءات المتابعة الخاصة بها.',
  },
  {
    path: appRoutes.owner.profile,
    title: 'الملف الشخصي للمالك',
    navLabel: 'الملف الشخصي',
    description: 'سيتم هنا عرض وإدارة بيانات الحساب الشخصي وتفضيلات المالك.',
  },
]

const renterRouteRegistry = [
  {
    path: appRoutes.renter.warehouses,
    title: 'استكشاف المستودعات',
    navLabel: 'المستودعات',
    description: 'هذا المسار سيكون مخصصًا لعرض المستودعات المتاحة وتجربة البحث والتصفية للمستأجر.',
  },
  {
    path: appRoutes.renter.warehouseDetails,
    title: 'تفاصيل المستودع',
    description: 'سيعرض هذا المسار تفاصيل المستودع المحدد عبر المعرّف الموجود في الرابط.',
  },
  {
    path: appRoutes.renter.bookings,
    title: 'حجوزات المستأجر',
    navLabel: 'الحجوزات',
    description: 'هذه الصفحة ستعرض الحجوزات الحالية والسابقة الخاصة بالمستأجر.',
  },
  {
    path: appRoutes.renter.checkout,
    title: 'إتمام الحجز',
    description: 'هذا المسار محجوز لخطوات الدفع وتأكيد الحجز للمستودع المحدد.',
  },
]

const standalonePlaceholderRoutes = [
  {
    path: appRoutes.register,
    title: 'تسجيل حساب جديد',
    description: 'مسار التسجيل جاهز ضمن العقد الجديد، وسيتم ربطه بتجربة إنشاء الحساب في المهام التالية.',
    shell: shellTypes.public,
  },
]

const toNavItem = ({ navLabel, path }) => ({ label: navLabel, to: path })

export const adminNav = adminRouteRegistry.filter((route) => route.navLabel).map(toNavItem)

export const adminRouteMap = Object.fromEntries(adminRouteRegistry.map((route) => [route.path, route]))

export const ownerNav = ownerRouteRegistry.filter((route) => route.navLabel).map(toNavItem)

export const renterNav = renterRouteRegistry.filter((route) => route.navLabel).map(toNavItem)

const roleRouteGroups = [
  { navItems: adminNav, routes: adminRouteRegistry },
  { navItems: ownerNav, routes: ownerRouteRegistry },
  { navItems: renterNav, routes: renterRouteRegistry },
]

export const placeholderRoutes = [
  ...standalonePlaceholderRoutes,
  ...roleRouteGroups.flatMap(({ navItems, routes }) =>
    routes.map((route) => ({
      ...route,
      shell: shellTypes.dashboard,
      navItems,
    }))
  ),
]
