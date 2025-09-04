import React, { FC } from 'react';

import { Dropdown, DropdownOption } from '../Dropdown';
import { Icon } from '../Icon';

interface ContextMenuProps {
  options: DropdownOption[];
}

export const ContextMenu: FC<ContextMenuProps> = ({ options }) => {
  return (
    <Dropdown options={options}>
      {() => (
        <button className="flex-center p-1 hover:opacity-80 transition-colors">
          <Icon name="more" size={20} />
        </button>
      )}
    </Dropdown>
  );
};
