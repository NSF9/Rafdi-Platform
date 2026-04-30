# Rafdi Frontend Mockup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a routed, RTL, instructor-ready Rafdi frontend mockup that covers all referenced role screens with reusable components and backend-ready mock data contracts.

**Architecture:** Keep the current React + Vite + Tailwind app and refactor it into a role-based dashboard experience. Create a shared authenticated shell and reusable UI primitives, then implement Admin, Owner, and Renter/Auth page groups. Use domain-organized mock data shaped like future API responses so backend integration is a source-swap rather than a UI rewrite.

**Tech Stack:** React 18, React Router 6, Tailwind CSS, Vite

---

## File Structure Map

### Existing files to modify

- `frontend/src/constants/routes.js`
- `frontend/src/constants/navigation.js`
- `frontend/src/routes.jsx`
- `frontend/src/pages/LoginPage.jsx`
- `frontend/src/index.css`
- `frontend/src/components/layout/AppShell.jsx`

### New shared layout/ui files

- `frontend/src/components/layout/DashboardShell.jsx`
- `frontend/src/components/layout/Sidebar.jsx`
- `frontend/src/components/layout/Topbar.jsx`
- `frontend/src/components/ui/PageHeader.jsx`
- `frontend/src/components/ui/KpiCard.jsx`
- `frontend/src/components/ui/DataTable.jsx`
- `frontend/src/components/ui/SearchField.jsx`
- `frontend/src/components/ui/FilterBar.jsx`
- `frontend/src/components/ui/InfoCard.jsx`
- `frontend/src/components/ui/EmptyState.jsx`

### New page files

- `frontend/src/pages/PlaceholderPage.jsx`
- `frontend/src/pages/RegisterPage.jsx`
- `frontend/src/pages/OverviewPage.jsx`
- `frontend/src/pages/admin/AdminDashboardPage.jsx`
- `frontend/src/pages/admin/AdminCompaniesPage.jsx`
- `frontend/src/pages/admin/AdminWarehousesPage.jsx`
- `frontend/src/pages/admin/AdminReservationsPage.jsx`
- `frontend/src/pages/admin/AdminSettingsPage.jsx`
- `frontend/src/pages/owner/OwnerWarehousesPage.jsx`
- `frontend/src/pages/owner/OwnerWarehouseFormPage.jsx`
- `frontend/src/pages/owner/OwnerBookingsPage.jsx`
- `frontend/src/pages/owner/OwnerProfilePage.jsx`
- `frontend/src/pages/renter/RenterWarehousesPage.jsx`
- `frontend/src/pages/renter/RenterWarehouseDetailsPage.jsx`
- `frontend/src/pages/renter/RenterBookingsPage.jsx`
- `frontend/src/pages/renter/RenterCheckoutPage.jsx`

### New domain mock-data files

- `frontend/src/data/adminMockData.js`
- `frontend/src/data/ownerMockData.js`
- `frontend/src/data/renterMockData.js`
- `frontend/src/data/sharedMockData.js`

### Transition rule

- Keep `frontend/src/data/mockData.js` as a temporary re-export shim during the mockup build.
- Migrate existing consumers to domain files as pages are touched.
- Remove the shim only after no page imports it anymore.

---

### Task 1: Route Contract and Navigation Foundation

**Files:**
- Modify: `frontend/src/constants/routes.js`
- Create: `frontend/src/constants/navigation.js`
- Modify: `frontend/src/routes.jsx`
- Create: `frontend/src/pages/PlaceholderPage.jsx`

- [ ] **Step 1: Inventory current route constant usage before changing shape**

Run: `rg "appRoutes\." frontend/src -n`  
Expected: existing references include `appRoutes.home`, `appRoutes.login`, and `appRoutes.dashboard` in current pages/components.

- [ ] **Step 2: Write the route contract checklist (scope baseline)**

```md
Expected routes to exist and render:
- /dashboard (temporary compatibility alias to /overview during transition)
- /login
- /register
- /overview
- /admin/dashboard
- /admin/companies
- /admin/warehouses
- /admin/reservations
- /admin/settings
- /owner/warehouses
- /owner/warehouses/new
- /owner/warehouses/:warehouseId/edit
- /owner/bookings
- /owner/profile
- /renter/warehouses
- /renter/warehouses/:warehouseId
- /renter/bookings
- /renter/checkout/:warehouseId
```

- [ ] **Step 3: Run app and verify the expanded contract currently fails**

Run: `npm run dev` (inside `frontend/`)  
Expected: most new routes do not exist yet.

- [ ] **Step 4: Implement route constants, navigation metadata, and placeholder route wiring**

```js
// constants/routes.js
export const appRoutes = {
  home: '/',
  login: '/login',
  dashboard: '/overview',
  register: '/register',
  overview: '/overview',
  admin: {
    dashboard: '/admin/dashboard',
    companies: '/admin/companies',
    warehouses: '/admin/warehouses',
    reservations: '/admin/reservations',
    settings: '/admin/settings',
  },
  owner: {
    warehouses: '/owner/warehouses',
    newWarehouse: '/owner/warehouses/new',
    editWarehouse: '/owner/warehouses/:warehouseId/edit',
    bookings: '/owner/bookings',
    profile: '/owner/profile',
  },
  renter: {
    warehouses: '/renter/warehouses',
    warehouseDetails: '/renter/warehouses/:warehouseId',
    bookings: '/renter/bookings',
    checkout: '/renter/checkout/:warehouseId',
  },
}

// constants/navigation.js
export const adminNav = [
  { label: 'لوحة المشرف', to: appRoutes.admin.dashboard },
  { label: 'الشركات', to: appRoutes.admin.companies },
  { label: 'المستودعات', to: appRoutes.admin.warehouses },
  { label: 'الحجوزات', to: appRoutes.admin.reservations },
  { label: 'الإعدادات', to: appRoutes.admin.settings },
]

export const ownerNav = [
  { label: 'المستودعات', to: appRoutes.owner.warehouses },
  { label: 'إضافة مستودع', to: appRoutes.owner.newWarehouse },
  { label: 'الحجوزات', to: appRoutes.owner.bookings },
  { label: 'الملف الشخصي', to: appRoutes.owner.profile },
]

export const renterNav = [
  { label: 'استعراض المستودعات', to: appRoutes.renter.warehouses },
  { label: 'حجوزاتي', to: appRoutes.renter.bookings },
]
```

```jsx
// routes.jsx transition rule
// Until Tasks 5-8 land real pages, wire new routes to <PlaceholderPage />
// so Tasks 1-4 still build cleanly.
```

- [ ] **Step 5: Update all existing flat-key call sites that are touched in foundation work**

Run: `rg "appRoutes\.dashboard|appRoutes\.home|appRoutes\.login" frontend/src -n`  
Expected: existing calls either remain valid through aliases or are updated intentionally.

- [ ] **Step 6: Re-run app and verify route contract is now fully mapped without build breaks**

Run: `npm run dev`  
Expected: all configured routes are wired, and not-yet-implemented routes render placeholders instead of crashing.

- [ ] **Step 7: Commit**

```bash
git add frontend/src/constants/routes.js frontend/src/constants/navigation.js frontend/src/pages/PlaceholderPage.jsx frontend/src/routes.jsx
git commit -m "refactor: define route contract and placeholder routing for frontend mockup"
```

---

### Task 2: Shared Authenticated Dashboard Shell

**Files:**
- Create: `frontend/src/components/layout/DashboardShell.jsx`
- Create: `frontend/src/components/layout/Sidebar.jsx`
- Create: `frontend/src/components/layout/Topbar.jsx`
- Modify: `frontend/src/components/layout/AppShell.jsx`
- Modify: `frontend/src/index.css`

- [ ] **Step 1: Write the failing UX check**

```md
Current issue:
- Role pages use marketing navbar/footer shell.
Target:
- Role pages use dashboard shell with sidebar + topbar.
```

- [ ] **Step 2: Verify current shell mismatch exists**

Run: `npm run dev`  
Expected: dashboard-like pages still render in public shell.

- [ ] **Step 3: Implement dashboard shell primitives aligned to System_Design**

```jsx
// DashboardShell.jsx (shape)
export default function DashboardShell({ navItems, title, children }) {
  return (
    <div dir="rtl" className="min-h-screen bg-rafdi-bg">
      <div className="grid lg:grid-cols-[1fr_280px]">
        <div>
          <Topbar title={title} />
          <main className="p-4 md:p-6 lg:p-8">{children}</main>
        </div>
        <Sidebar navItems={navItems} />
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Verify shell rendering and RTL behavior**

Run: `npm run dev`  
Expected: role routes render with sidebar/topbar shell, no RTL layout break, and the sidebar appears on the right on large screens.

- [ ] **Step 5: Commit**

```bash
git add frontend/src/components/layout frontend/src/index.css
git commit -m "feat: add authenticated dashboard shell with rtl-ready layout"
```

---

### Task 3: Shared UI Primitives and Status/Filter/Table Patterns

**Files:**
- Create: `frontend/src/components/ui/PageHeader.jsx`
- Create: `frontend/src/components/ui/KpiCard.jsx`
- Create: `frontend/src/components/ui/DataTable.jsx`
- Create: `frontend/src/components/ui/SearchField.jsx`
- Create: `frontend/src/components/ui/FilterBar.jsx`
- Create: `frontend/src/components/ui/InfoCard.jsx`
- Create: `frontend/src/components/ui/EmptyState.jsx`
- Modify: `frontend/src/components/ui/StatusBadge.jsx`

- [ ] **Step 1: Write failing UI contract checklist**

```md
Required reusable primitives:
- Page header
- KPI card
- Generic data table
- Search/filter controls
- Info card and empty state
- Status badge states for admin/owner/renter workflows
```

- [ ] **Step 2: Verify primitives are currently missing/incomplete**

Run: `npm run dev`  
Expected: no reusable table/filter suite for target screens.

- [ ] **Step 3: Implement primitives with minimal shared API**

```jsx
// DataTable.jsx (shape)
export default function DataTable({ columns, rows, rowKey }) {
  return (
    <div className="overflow-x-auto rounded-3xl border border-slate-100 bg-white">
      <table className="w-full min-w-[720px] text-right">
        <thead>{/* render column headers */}</thead>
        <tbody>{/* render rows */}</tbody>
      </table>
    </div>
  )
}
```

- [ ] **Step 4: Verify primitives render in a sample page without duplication**

Run: `npm run dev`  
Expected: sample route uses primitives and keeps visual consistency.

- [ ] **Step 5: Commit**

```bash
git add frontend/src/components/ui
git commit -m "feat: add shared dashboard ui primitives for tables filters and stats"
```

---

### Task 4: Domain Mock Data Contracts (Backend-Ready Shape)

**Files:**
- Create: `frontend/src/data/adminMockData.js`
- Create: `frontend/src/data/ownerMockData.js`
- Create: `frontend/src/data/renterMockData.js`
- Create: `frontend/src/data/sharedMockData.js`
- Modify: `frontend/src/data/mockData.js` (temporary re-export shim only)

- [ ] **Step 1: Write failing data contract checklist**

```md
Each domain must expose:
- list data
- detail data
- status values
- page summary metrics
```

- [ ] **Step 2: Verify current `mockData.js` is insufficient for all target pages**

Run: `npm run dev`  
Expected: current data lacks full page-level structures for all routes.

- [ ] **Step 3: Implement domain split and stable interfaces**

```js
// adminMockData.js (shape)
export const adminMetrics = [
  { id: 'companies', label: 'الشركات', value: '42', tone: 'primary' },
  { id: 'warehouses', label: 'المستودعات', value: '26', tone: 'neutral' },
  { id: 'bookings', label: 'الحجوزات النشطة', value: '128', tone: 'success' },
]

export const adminCompanies = [
  {
    id: 'cmp-001',
    name: 'شركة المسار التجاري',
    commercialRegistration: '1010543210',
    roleLabel: 'شركة تأجير',
    city: 'الرياض',
    status: 'قيد المراجعة',
  },
]

export const adminWarehouses = [
  {
    id: 'wh-001',
    name: 'مستودع الرمال اللوجستي',
    ownerName: 'شركة الرافد الحديث',
    city: 'الرياض',
    locationLabel: 'حي السلي',
    status: 'نشط',
  },
]

export const adminReservations = [
  {
    id: 'res-001',
    renterName: 'شركة الإمداد الذكي',
    warehouseName: 'مستودع الرمال اللوجستي',
    rentalAmountSar: 12500,
    renterFeeSar: 500,
    ownerFeeSar: 250,
    platformFeeSar: 750,
    status: 'مؤكد',
  },
]

export const adminProfile = {
  companyName: 'رفدي',
  displayName: 'مشرف النظام',
  email: 'admin@rafdi.sa',
  commercialRegistration: '7000000000',
  role: 'admin',
}

// ownerMockData.js (shape)
export const ownerProfile = {
  companyName: 'شركة الرافد الحديث',
  email: 'owner@rafdi.sa',
  commercialRegistration: '2054432100',
  role: 'owner',
  avatarInitial: 'ر',
}

export const ownerWarehouses = [
  {
    id: 'own-wh-001',
    name: 'مستودع الرمال اللوجستي',
    city: 'الرياض',
    district: 'السلي',
    areaSqm: 1200,
    monthlyPriceSar: 12500,
    status: 'نشط',
  },
]

export const ownerBookings = [
  {
    id: 'own-bk-001',
    tenantCompanyName: 'شركة الإمداد الذكي',
    warehouseName: 'مستودع الرمال اللوجستي',
    startDate: '2026-05-01',
    endDate: '2026-10-01',
    totalSar: 75000,
    platformFeeSar: 4500,
    bookingStatus: 'مؤكد',
    paymentStatus: 'مدفوع',
  },
]

// renterMockData.js (shape)
export const renterWarehouseCatalog = [
  {
    id: 'rent-wh-001',
    name: 'مستودع الرمال اللوجستي',
    city: 'الرياض',
    district: 'السلي',
    sizeSqm: 1200,
    monthlyPriceSar: 12500,
    ownerCompany: 'شركة الرافد الحديث',
    availabilityStatus: 'متاح',
  },
]

export const renterWarehouseDetailsById = {
  'rent-wh-001': {
    id: 'rent-wh-001',
    name: 'مستودع الرمال اللوجستي',
    city: 'الرياض',
    district: 'السلي',
    address: 'طريق الخرج، الرياض',
    sizeSqm: 1200,
    monthlyPriceSar: 12500,
    description: 'مستودع مجهز للاستخدام اللوجستي مع وصول سهل ومساحة تحميل جيدة.',
    owner: {
      companyName: 'شركة الرافد الحديث',
      contactEmail: 'leasing@alrafid.sa',
      contactPhone: '+966500000000',
    },
  },
}

export const renterBookings = [
  {
    id: 'rent-bk-001',
    warehouseId: 'rent-wh-001',
    warehouseName: 'مستودع الرمال اللوجستي',
    startDate: '2026-05-01',
    endDate: '2026-10-01',
    totalCostSar: 75000,
    bookingStatus: 'مؤكد',
    paymentStatus: 'مدفوع',
  },
]

export const renterCheckoutDrafts = {
  'rent-wh-001': {
    warehouseId: 'rent-wh-001',
    startDate: '2026-05-01',
    months: 6,
    monthlyPriceSar: 12500,
    platformFeeSar: 4500,
    totalSar: 79500,
  },
}
```

```js
// mockData.js transition rule
export * from './sharedMockData'
```

- [ ] **Step 4: Verify data imports can be consumed by placeholder role pages**

Run: `npm run dev`  
Expected: role pages read data from dedicated domain files.

- [ ] **Step 5: Commit**

```bash
git add frontend/src/data
git commit -m "refactor: split frontend mock data by admin owner and renter domains"
```

---

### Task 5: Admin Screen Set

**Files:**
- Create: `frontend/src/pages/admin/AdminDashboardPage.jsx`
- Create: `frontend/src/pages/admin/AdminCompaniesPage.jsx`
- Create: `frontend/src/pages/admin/AdminWarehousesPage.jsx`
- Create: `frontend/src/pages/admin/AdminReservationsPage.jsx`
- Create: `frontend/src/pages/admin/AdminSettingsPage.jsx`
- Modify: `frontend/src/routes.jsx`

- [ ] **Step 1: Write failing route-page checks**

```md
Admin pages required:
- /admin/dashboard
- /admin/companies
- /admin/warehouses
- /admin/reservations
- /admin/settings
```

- [ ] **Step 2: Open the matching Admin design PNGs before implementation**

Reference:
- `Design/Admin_contorl_panal_Admin_screen.png`
- `Design/manging_ranting _company_admin_screen.png`
- `Design/manging_Warehouse_admin_screen.png`
- `Design/all_reservations_admin_screen.png`
- `Design/admin_setting_admin_screen.png`

- [ ] **Step 3: Verify admin pages currently missing**

Run: `npm run dev`  
Expected: missing files or placeholder-only rendering.

- [ ] **Step 4: Implement admin pages using shared primitives + admin mock data**

```jsx
// AdminCompaniesPage.jsx (shape)
return (
  <DashboardShell navItems={adminNav} title="إدارة الشركات">
    <PageHeader title="إدارة شركات التأجير" description="مراجعة الحالة والتفعيل" />
    <FilterBar />
    <DataTable columns={companyColumns} rows={adminCompanies} rowKey="id" />
  </DashboardShell>
)
```

- [ ] **Step 5: Verify admin routes are navigable and visually aligned**

Run: `npm run dev`  
Expected: all admin pages render correctly in dashboard shell.

- [ ] **Step 6: Commit**

```bash
git add frontend/src/pages/admin frontend/src/routes.jsx
git commit -m "feat: implement admin mockup screens with routed dashboard flow"
```

---

### Task 6: Warehouse Owner Screen Set

**Files:**
- Create: `frontend/src/pages/owner/OwnerWarehousesPage.jsx`
- Create: `frontend/src/pages/owner/OwnerWarehouseFormPage.jsx`
- Create: `frontend/src/pages/owner/OwnerBookingsPage.jsx`
- Create: `frontend/src/pages/owner/OwnerProfilePage.jsx`
- Modify: `frontend/src/routes.jsx`

- [ ] **Step 1: Write failing route-page checks**

```md
Owner pages required:
- /owner/warehouses
- /owner/warehouses/new
- /owner/warehouses/:warehouseId/edit
- /owner/bookings
- /owner/profile
```

- [ ] **Step 2: Open the matching Owner design PNGs before implementation**

Reference:
- `Design/warehouse_manegement.png`
- `Design/add_werehaouse_Warehouse_Owner_screen.png`
- `Design/warhouses_Booking_manegment_Warehouse_Owner_screen.png`
- `Design/profile_panel.png`

- [ ] **Step 3: Verify owner pages currently missing**

Run: `npm run dev`  
Expected: owner pages not yet implemented.

- [ ] **Step 4: Implement owner pages using shared primitives + owner mock data**

```jsx
// OwnerBookingsPage.jsx (shape)
return (
  <DashboardShell navItems={ownerNav} title="إدارة الحجوزات">
    <PageHeader title="حجوزات المستودعات" description="متابعة الدفعات والأرباح" />
    <DataTable columns={bookingColumns} rows={ownerBookings} rowKey="id" />
  </DashboardShell>
)
```

- [ ] **Step 5: Verify owner flow continuity (list -> new/edit -> bookings -> profile)**

Run: `npm run dev`  
Expected: owner route group is consistent and navigable.

- [ ] **Step 6: Commit**

```bash
git add frontend/src/pages/owner frontend/src/routes.jsx
git commit -m "feat: implement warehouse owner mockup screens and forms"
```

---

### Task 7: Shared Auth and Overview Screens

**Files:**
- Create: `frontend/src/pages/RegisterPage.jsx`
- Create: `frontend/src/pages/OverviewPage.jsx`
- Modify: `frontend/src/pages/LoginPage.jsx`
- Modify: `frontend/src/routes.jsx`

- [ ] **Step 1: Open the matching shared auth design PNGs before implementation**

Reference:
- `Design/login.png`
- `Design/registration_form.png`

- [ ] **Step 2: Verify current login/signup behavior does not match target flow**

Run: `npm run dev`  
Expected: login contains preview-only signup and redirects to generic dashboard.

- [ ] **Step 3: Implement register and overview pages and update login redirect targets**

```jsx
// LoginPage.jsx (shape)
const handleSubmit = (event) => {
  event.preventDefault()
  navigate(appRoutes.overview)
}
```

- [ ] **Step 4: Verify auth and overview routes render cleanly**

Run: `npm run dev`  
Expected: `/login`, `/register`, and `/overview` render without placeholder-only fallback.

- [ ] **Step 5: Commit**

```bash
git add frontend/src/pages/LoginPage.jsx frontend/src/pages/RegisterPage.jsx frontend/src/pages/OverviewPage.jsx frontend/src/routes.jsx
git commit -m "feat: implement shared auth and overview screens for instructor demo"
```

---

### Task 8: Renting Company Screen Set

**Files:**
- Create: `frontend/src/pages/renter/RenterWarehousesPage.jsx`
- Create: `frontend/src/pages/renter/RenterWarehouseDetailsPage.jsx`
- Create: `frontend/src/pages/renter/RenterBookingsPage.jsx`
- Create: `frontend/src/pages/renter/RenterCheckoutPage.jsx`
- Modify: `frontend/src/routes.jsx`

- [ ] **Step 1: Write failing route-page checks**

```md
Renter pages required:
- /renter/warehouses
- /renter/warehouses/:warehouseId
- /renter/bookings
- /renter/checkout/:warehouseId
```

- [ ] **Step 2: Open the matching Renter design PNGs before implementation**

Reference:
- `Design/browesing_werrhouse_Renting_Company_Screen.png`
- `Design/avilable_wherhouses_Renting_Company_Screen.png`
- `Design/my_reservasion_booking_Renting_Company_Screen .png`
- `Design/checkout.png`

- [ ] **Step 3: Verify renter placeholder routes currently need real page implementation**

Run: `npm run dev`  
Expected: renter routes exist but still show placeholders or incomplete content.

- [ ] **Step 4: Implement renter pages using shared primitives + renter mock data**

```jsx
// RenterCheckoutPage.jsx (shape)
return (
  <DashboardShell navItems={renterNav} title="إتمام الحجز">
    <PageHeader title="الدفع وإتمام الحجز" description="مراجعة تفاصيل المستودع والرسوم قبل التأكيد" />
    <InfoCard />
    <DataTable columns={checkoutColumns} rows={checkoutRows} rowKey="id" />
  </DashboardShell>
)
```

- [ ] **Step 5: Verify renter flow (browse -> details -> checkout -> bookings)**

Run: `npm run dev`  
Expected: renter routes are navigable and match design intent.

- [ ] **Step 6: Commit**

```bash
git add frontend/src/pages/renter frontend/src/routes.jsx
git commit -m "feat: implement renter mockup flows for instructor demo"
```

---

### Task 9: Visual Alignment, Integration Pass, and Verification

**Files:**
- Modify: `frontend/src/index.css`
- Modify: `frontend/src/components/layout/*.jsx`
- Modify: `frontend/src/components/ui/*.jsx`
- Modify: `frontend/src/pages/**/*.jsx`

- [ ] **Step 1: Write failing acceptance checklist from the spec**

```md
- All role route groups render
- Visual language aligns with System_Design
- RTL is preserved on tables/forms/cards
- Mobile and desktop both usable
- No major route dead ends
```

- [ ] **Step 2: Run full build verification**

Run: `npm run build` (inside `frontend/`)  
Expected: build completes successfully.

- [ ] **Step 3: Run local manual QA sweep**

Run: `npm run dev`  
Expected: route coverage and UI consistency pass on key breakpoints.

- [ ] **Step 4: Apply final polish fixes discovered in QA**

```md
Focus fixes:
- spacing/radius/shadow drift
- status badge consistency
- RTL overflows in wide tables
- navigation label clarity
```

- [ ] **Step 5: Final commit**

```bash
git add frontend/src
git commit -m "feat: finalize rafdi routed frontend mockup across admin owner and renter screens"
```

---

## Parallel-Agent Execution Split

Use this split after Tasks 1-4 are complete:

- Agent A: Task 5 (Admin screen set)
- Agent B: Task 6 (Owner screen set)
- Agent C: Task 7 and Task 8 (Shared Auth/Overview, then Renter screen set)

Then run Task 9 in a single integration pass.

## Verification Commands

Run from `frontend/`:

```bash
npm run build
npm run dev
```

Expected outcomes:

- Build passes without errors.
- All configured routes render.
- Role-based navigation is consistent.
- UI remains aligned with `Design/System_Design.png`.
