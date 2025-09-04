import clsx from 'clsx';
import React, { FC } from 'react';
import Drawer from 'react-modern-drawer';

import 'react-modern-drawer/dist/index.css';
import { Icon } from '../Icon';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  className?: string;
  width?: string;
  rightComponent?: React.ReactNode;
}

export const SideDrawer: FC<SideDrawerProps> = ({
  isOpen,
  onClose,
  children,
  title,
  className,
  width = '24rem',
  rightComponent,
}) => {
  return (
    <Drawer
      enableOverlay
      lockBackgroundScroll
      className={clsx('h-screen bg-white shadow-xl flex flex-col', className)}
      direction="right"
      open={isOpen}
      style={{ width }}
      onClose={onClose}
    >
      <div className="flex items-center justify-between gap-2 p-5 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <button
            className="flex flex-center text-gray-500 hover:text-gray-700"
            onClick={e => {
              e.stopPropagation();
              onClose();
            }}
          >
            <Icon name="close" size={18} />
          </button>
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
        </div>

        {rightComponent}
      </div>

      <div className="flex-1 overflow-y-auto p-5">{children}</div>
    </Drawer>
  );
};
