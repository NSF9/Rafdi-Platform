# Rafdi Frontend Mockup Design Spec

**Date:** 2026-04-30  
**Owner:** Frontend team (mockup stream)  
**Status:** Approved for implementation

## 1) Objective

Build an instructor-ready frontend mockup for Rafdi using the existing React + Vite + Tailwind project, while strictly aligning with `Design/System_Design.png` and preserving a structure that can be connected to backend APIs later with minimal rewrites.

The mockup must cover all referenced screens in `Design/` through a real routed application (not a single static gallery), with balanced quality across Admin, Warehouse Owner, and Renting Company flows.

## 2) Scope

### In scope

- Keep and evolve current frontend in `frontend/`.
- Build a single RTL app with a dashboard-style shell and role-grouped routes.
- Cover all referenced role screens:
  - Admin: control panel, company management, warehouse management, reservations, settings
  - Warehouse Owner: warehouse management, add/edit warehouse, bookings management, profile
  - Renting Company: browse warehouses, available/detail view, my reservations, checkout
  - Shared auth: login and registration
- Use structured mock data shaped to future API responses.
- Reuse shared UI primitives and visual tokens to keep consistency.

### Out of scope (for this mockup phase)

- Real backend requests or persistence.
- Full auth/authorization enforcement.
- Production analytics, advanced permissions, and server-driven state.
- Finalized business validation rules beyond basic UI-level checks.

## 3) Design Constraints (Non-negotiable)

- Follow `Design/System_Design.png` as the design source of truth.
- Preserve Arabic-first RTL layout behavior.
- Use the established color semantics and visual hierarchy:
  - Primary dark/navy emphasis
  - Primary blue actions
  - Light background surfaces
  - Consistent status colors for success/warning/error/neutral
- Keep spacing, corner radii, and shadow style coherent across all screens.
- Maintain balanced emphasis across all role flows.

## 4) Information Architecture and Route Map

### Shared routes

- `/`
- `/login`
- `/register`
- `/overview`

### Admin routes

- `/admin/dashboard`
- `/admin/companies`
- `/admin/warehouses`
- `/admin/reservations`
- `/admin/settings`

### Warehouse Owner routes

- `/owner/warehouses`
- `/owner/warehouses/new`
- `/owner/warehouses/:warehouseId/edit`
- `/owner/bookings`
- `/owner/profile`

### Renting Company routes

- `/renter/warehouses`
- `/renter/warehouses/:warehouseId`
- `/renter/bookings`
- `/renter/checkout/:warehouseId`

## 5) Application Structure

### Shell strategy

- Keep a public shell for marketing/auth contexts where useful.
- Add an authenticated dashboard shell for role routes with:
  - Role-aware sidebar navigation
  - Top bar utilities (profile, notifications, quick actions)
  - Main content container supporting RTL and responsive layouts

### Composition strategy

- Build small reusable primitives and compose pages from them.
- Avoid one-off page-specific patterns unless strictly required by a design reference.
- Keep page code focused on data mapping and section composition, not low-level styling repetition.

## 6) Shared UI Building Blocks

Planned shared components (names may vary slightly by code conventions):

- `DashboardShell`
- `Sidebar`
- `Topbar`
- `PageHeader`
- `KpiCard`
- `StatusBadge` (extended where needed)
- `DataTable`
- `FilterBar`
- `SearchField`
- `InfoCard`
- `FormSection`
- `EmptyState`

## 7) Data Contracts for Mock-First Development

Mock data is organized by domain to enable low-friction backend swap later.

### Admin domain

- `adminMetrics[]`
- `adminCompanies[]`
- `adminWarehouses[]`
- `adminReservations[]`
- `adminProfile`

### Owner domain

- `ownerProfile`
- `ownerWarehouses[]`
- `ownerBookings[]`

### Renter domain

- `renterWarehouseCatalog[]`
- `renterWarehouseDetailsById`
- `renterBookings[]`
- `renterCheckoutDrafts`

### Shared lookups

- Status dictionaries and tone mappings
- Navigation metadata
- Option lists for filters/forms

## 8) Backend Integration Readiness

Frontend contracts are intentionally shaped so each page can move from:

`mock import -> service function -> API call`

without redesigning component boundaries.

Integration pattern:

1. Define stable page-level data interfaces.
2. Keep UI components presentational where possible.
3. Centralize data access per domain (`admin`, `owner`, `renter`).
4. Replace domain mock sources with async services in a later phase.

## 9) Interaction Scope for Instructor Demo

Supported interactions:

- Route navigation and role section switching
- Table/list display and status visualization
- Search/filter UI behavior (client-side)
- Basic form input flows (add/edit/checkout/profile)
- CTA transitions between key pages

Not required for this phase:

- Durable data mutation across refresh
- Full workflow side effects with real payments or approvals

## 10) Responsive and Accessibility Baseline

- Desktop-first layout that remains usable on mobile widths.
- No RTL-breaking overflow in tables/forms/cards.
- Meaningful headings and labels on all screens.
- Click targets and contrast consistent with the system design.

## 11) Execution Model

To accelerate delivery safely, work in two stages:

### Stage A: Foundation (sequential)

- Route map refactor
- Authenticated shell setup
- Shared visual tokens and primitives
- Mock data contract setup

### Stage B: Role pages (parallel)

- Admin page set
- Owner page set
- Renter/auth page set

Then run a single integration pass for consistency and route QA.

## 12) Risks and Mitigations

- **Risk:** Existing app shell is marketing-oriented for all pages.  
  **Mitigation:** Introduce dedicated authenticated shell for role routes.

- **Risk:** Current mock data is too shallow for full screen coverage.  
  **Mitigation:** Split by domain and align to planned route needs.

- **Risk:** Mixed status vocabulary across references (Arabic/English).  
  **Mitigation:** Standardize display labels and tone mapping per design guidance.

- **Risk:** Screen count can cause visual drift.  
  **Mitigation:** Enforce shared component primitives and token usage.

## 13) Acceptance Criteria

- All referenced screen groups in `Design/` are represented by real routes.
- Visual style remains aligned with `Design/System_Design.png`.
- Admin, Owner, and Renter experiences have balanced completeness.
- Mock data structures are domain-organized and backend-friendly.
- App builds successfully and routes are navigable in RTL and mobile/desktop contexts.
