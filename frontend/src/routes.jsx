import { Route, Routes } from 'react-router-dom'
import { appRoutes } from './constants/routes'
import DashboardShowcasePage from './pages/DashboardShowcasePage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={appRoutes.home} element={<HomePage />} />
      <Route path={appRoutes.login} element={<LoginPage />} />
      <Route path={appRoutes.dashboard} element={<DashboardShowcasePage />} />
    </Routes>
  )
}
