import { FC } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import {
  CustomersPage,
  DashboardPage,
  OrdersPage,
  ProductsPage,
  ReportsPage,
} from '@/pages';

import { AppLayout } from '../layouts';

const appRoutes = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate replace to="/dashboard" /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'customers', element: <CustomersPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'reports', element: <ReportsPage /> },
    ],
  },
];

export const Router: FC = () => {
  return useRoutes(appRoutes);
};
