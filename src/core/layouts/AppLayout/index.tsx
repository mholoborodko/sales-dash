import { Outlet } from 'react-router-dom';

import { Sidebar } from '@/widgets/Sidebar';

const items = [
  { label: 'Dashboard', to: '/dashboard', icon: 'dashboard' },
  { label: 'Customers', to: '/customers', icon: 'customers' },
  { label: 'Orders', to: '/orders', icon: 'orders' },
  { label: 'Products', to: '/products', icon: 'products' },
];

export const AppLayout = () => {
  return (
    <div className="flex">
      <Sidebar items={items} />
      <main className="flex-1 p-6 bg-gray-50 min-h-screen overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};
