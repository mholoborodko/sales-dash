import React, { FC } from 'react';

import { ContextMenu } from '@/shared/ui';
import { DropdownOption } from '@/shared/ui/Dropdown';

export const MoreCell: FC = () => {
  const options: DropdownOption[] = [
    {
      label: 'Edit',
    },
    {
      label: 'Delete',
      className: 'text-red-500',
    },
  ];

  return <ContextMenu options={options} />;
};
