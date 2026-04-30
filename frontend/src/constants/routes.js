const adminRoutes = {
  dashboard: '/admin/dashboard',
  companies: '/admin/companies',
  warehouses: '/admin/warehouses',
  reservations: '/admin/reservations',
  settings: '/admin/settings',
}

const ownerRoutes = {
  warehouses: '/owner/warehouses',
  warehousesNew: '/owner/warehouses/new',
  warehouseEdit: '/owner/warehouses/:warehouseId/edit',
  bookings: '/owner/bookings',
  profile: '/owner/profile',
}

const renterRoutes = {
  warehouses: '/renter/warehouses',
  warehouseDetails: '/renter/warehouses/:warehouseId',
  bookings: '/renter/bookings',
  checkout: '/renter/checkout/:warehouseId',
}

export const appRoutes = {
  home: '/',
  login: '/login',
  dashboard: '/dashboard',
  register: '/register',
  overview: '/overview',
  admin: adminRoutes,
  owner: ownerRoutes,
  renter: renterRoutes,
  adminDashboard: adminRoutes.dashboard,
  adminCompanies: adminRoutes.companies,
  adminWarehouses: adminRoutes.warehouses,
  adminReservations: adminRoutes.reservations,
  adminSettings: adminRoutes.settings,
  ownerWarehouses: ownerRoutes.warehouses,
  ownerWarehousesNew: ownerRoutes.warehousesNew,
  ownerWarehouseEdit: ownerRoutes.warehouseEdit,
  ownerBookings: ownerRoutes.bookings,
  ownerProfile: ownerRoutes.profile,
  renterWarehouses: renterRoutes.warehouses,
  renterWarehouseDetails: renterRoutes.warehouseDetails,
  renterBookings: renterRoutes.bookings,
  renterCheckout: renterRoutes.checkout,
}
