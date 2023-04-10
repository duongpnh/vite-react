import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App'
import { Catalog } from './pages/catalog'
import { ErrorPage } from './error-page'
import { Dashboard } from './pages/dashboard'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Dashboard />} />
    <Route path="catalog" element={<Catalog />} />
  </Route>
);

export const router = createBrowserRouter(routes)