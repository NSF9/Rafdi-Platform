import { Navigate, Route, Routes } from 'react-router-dom'
import { adminNav, adminRouteMap, ownerNav, renterNav, placeholderRoutes } from './constants/navigation'
import { appRoutes } from './constants/routes'
import AppShell from './components/layout/AppShell'
import DashboardShell from './components/layout/DashboardShell'
import AdminCompaniesPage from './pages/admin/AdminCompaniesPage'
import AdminDashboardPage from './pages/admin/AdminDashboardPage'
import AdminReservationsPage from './pages/admin/AdminReservationsPage'
import AdminSettingsPage from './pages/admin/AdminSettingsPage'
import AdminWarehousesPage from './pages/admin/AdminWarehousesPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import OverviewPage from './pages/OverviewPage'
import OwnerBookingsPage from './pages/owner/OwnerBookingsPage'
import OwnerProfilePage from './pages/owner/OwnerProfilePage'
import OwnerWarehouseFormPage from './pages/owner/OwnerWarehouseFormPage'
import OwnerWarehousesPage from './pages/owner/OwnerWarehousesPage'
import PlaceholderPage from './pages/PlaceholderPage'
import RegisterPage from './pages/RegisterPage'
import RenterBookingsPage from './pages/renter/RenterBookingsPage'
import RenterCheckoutPage from './pages/renter/RenterCheckoutPage'
import RenterWarehouseDetailsPage from './pages/renter/RenterWarehouseDetailsPage'
import RenterWarehousesPage from './pages/renter/RenterWarehousesPage'

const adminPagePaths = new Set(Object.values(appRoutes.admin))
const ownerPagePaths = new Set(Object.values(appRoutes.owner))
const renterPagePaths = new Set(Object.values(appRoutes.renter))
const nonImplementedPlaceholderRoutes = placeholderRoutes.filter(
  (route) => !adminPagePaths.has(route.path) && !ownerPagePaths.has(route.path) && !renterPagePaths.has(route.path) && route.path !== appRoutes.register
)

function renderAdminRoute(path, page) {
  const route = adminRouteMap[path]

  return (
    <DashboardShell navItems={adminNav} title={route?.title || ''} className="py-10 md:py-12">
      {page}
    </DashboardShell>
  )
}

function renderOwnerRoute(title, page) {
  return (
    <DashboardShell navItems={ownerNav} title={title} className="py-10 md:py-12">
      {page}
    </DashboardShell>
  )
}

function renderOwnerWarehouseOverlayRoute(title) {
  return (
    <DashboardShell navItems={ownerNav} title={title} className="py-10 md:py-12">
      <div className="relative">
        <OwnerWarehousesPage />
        <OwnerWarehouseFormPage />
      </div>
    </DashboardShell>
  )
}

function renderRenterRoute(title, page) {
  return (
    <DashboardShell navItems={renterNav} title={title} className="py-10 md:py-12">
      {page}
    </DashboardShell>
  )
}

function renderPlaceholderRoute(route) {
  const content = <PlaceholderPage title={route.title} description={route.description} />

  if (route.shell === 'dashboard') {
    return (
      <DashboardShell navItems={route.navItems} title={route.title} className="py-10 md:py-12">
        {content}
      </DashboardShell>
    )
  }

  return <AppShell className="py-10 md:py-12">{content}</AppShell>
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={appRoutes.home} element={<HomePage />} />
      <Route path={appRoutes.login} element={<LoginPage />} />
      <Route path={appRoutes.register} element={<RegisterPage />} />
      <Route path={appRoutes.overview} element={<OverviewPage />} />
      <Route path={appRoutes.dashboard} element={<Navigate to={appRoutes.overview} replace />} />
      <Route
        path={appRoutes.admin.dashboard}
        element={renderAdminRoute(appRoutes.admin.dashboard, <AdminDashboardPage />)}
      />
      <Route
        path={appRoutes.admin.companies}
        element={renderAdminRoute(appRoutes.admin.companies, <AdminCompaniesPage />)}
      />
      <Route
        path={appRoutes.admin.warehouses}
        element={renderAdminRoute(appRoutes.admin.warehouses, <AdminWarehousesPage />)}
      />
      <Route
        path={appRoutes.admin.reservations}
        element={renderAdminRoute(appRoutes.admin.reservations, <AdminReservationsPage />)}
      />
      <Route
        path={appRoutes.admin.settings}
        element={renderAdminRoute(appRoutes.admin.settings, <AdminSettingsPage />)}
      />
      <Route
        path={appRoutes.owner.warehouses}
        element={renderOwnerRoute('مستودعات المالك', <OwnerWarehousesPage />)}
      />
      <Route
        path={appRoutes.owner.warehousesNew}
        element={renderOwnerWarehouseOverlayRoute('إضافة مستودع جديد')}
      />
      <Route
        path={appRoutes.owner.warehouseEdit}
        element={renderOwnerWarehouseOverlayRoute('تعديل بيانات المستودع')}
      />
      <Route
        path={appRoutes.owner.bookings}
        element={renderOwnerRoute('حجوزات المالك', <OwnerBookingsPage />)}
      />
      <Route
        path={appRoutes.owner.profile}
        element={renderOwnerRoute('الملف الشخصي للمالك', <OwnerProfilePage />)}
      />
      <Route
        path={appRoutes.renter.warehouses}
        element={renderRenterRoute('استكشاف المستودعات', <RenterWarehousesPage />)}
      />
      <Route
        path={appRoutes.renter.warehouseDetails}
        element={renderRenterRoute('تفاصيل المستودع', <RenterWarehouseDetailsPage />)}
      />
      <Route
        path={appRoutes.renter.bookings}
        element={renderRenterRoute('حجوزات المستأجر', <RenterBookingsPage />)}
      />
      <Route
        path={appRoutes.renter.checkout}
        element={renderRenterRoute('إتمام الحجز', <RenterCheckoutPage />)}
      />
      {nonImplementedPlaceholderRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={renderPlaceholderRoute(route)}
        />
      ))}
    </Routes>
  )
}
