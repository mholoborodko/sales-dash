import clsx from 'clsx';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { SidebarNotifications } from '@/features';
import logo from '@/shared/assets/icons/logo.svg';
import smallLogo from '@/shared/assets/icons/small-logo.svg';
import { Avatar, Icon } from '@/shared/ui';

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
    <aside className="sticky top-0 h-screen w-20 lg:w-60 bg-[#1f1b2e] text-white p-4 shadow-lg flex flex-col">
      <div className="flex flex-col gap-5 align-middle lg:flex-row items-center justify-between">
        <img alt="logo" className="hidden lg:block" src={logo} width={150} />
        <img
          alt="logo"
          className="lg:hidden block"
          src={smallLogo}
          width={48}
        />

        <SidebarNotifications />
      </div>

      <nav className="mt-8 flex flex-col flex-1 gap-2">
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
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-3 mb-4">
        <Avatar size={48} />
        <div className="flex flex-col gap-1">
          <span className="text-gray-200 text-sm hidden lg:block">
            John Smith
          </span>
          <span className="text-gray-400 text-xs hidden lg:block">
            johnsmith@gmail.com
          </span>
        </div>
      </div>
    </aside>
  );
};
