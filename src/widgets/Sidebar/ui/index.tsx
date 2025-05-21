import clsx from 'clsx';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '@/shared/assets/icons/logo.svg';
import { Icon } from '@/shared/ui';

export interface SidebarItem {
  label: string;
  to: string;
  icon: string;
}

export interface SidebarProps {
  items: SidebarItem[];
}

export const Sidebar: FC<SidebarProps> = ({ items }) => {
  const location = useLocation();

  return (
    <aside className="sticky top-0 h-screen w-60 bg-[#1f1b2e] text-white p-4 shadow-lg">
      <img alt="logo" src={logo} width={150} />
      <nav className="mt-8 flex flex-col gap-2">
        {items.map(item => {
          const isActive = location.pathname === item.to;

          return (
            <Link
              key={item.to}
              className={clsx(
                'flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-600 transition-colors',
                isActive && 'bg-gray-600 font-semibold'
              )}
              to={item.to}
            >
              <Icon name={item.icon} size={18} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
