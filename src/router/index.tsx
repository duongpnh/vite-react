import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import App from '../App';
import { Catalog } from '../pages/catalog';
import { ErrorPage } from '../error-page';
import { Dashboard } from '../pages/dashboard';
import { SignIn } from '../pages/auth/SignIn';
import { ProtectedRoute } from './ProtectedRoute';
import { SignUp } from '@/pages/auth/SignUp';
import { ProductsManagement } from '@/pages/products';
import { OrdersManagement } from '@/pages/orders';
import { UsersManagement } from '@/pages/users';
import { NewProduct } from '@/pages/products/new-product';

const routes = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />}>
    <Route index element={<Dashboard />} />
    <Route element={<ProtectedRoute />}>
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/products" element={<ProductsManagement />} />
      <Route path="/products/add" element={<NewProduct />} />
      <Route path="/users" element={<UsersManagement />} />
      <Route path="/orders" element={<OrdersManagement />} />
    </Route>
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
  </Route>
);

export const router = createBrowserRouter(routes);
