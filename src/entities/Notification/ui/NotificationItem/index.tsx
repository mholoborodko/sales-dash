import clsx from 'clsx';
import { FC } from 'react';

import { DateFormat } from '@/shared/constants';
import { toDateFormat } from '@/shared/utils';

import { NotificationModel } from '../../model';

interface NotificationItemProps extends NotificationModel {}

export const NotificationItem: FC<NotificationItemProps> = ({
  message,
  date,
  read,
  title,
}) => {
  return (
    <div
      className={clsx(
        'p-3 rounded-lg border flex flex-col gap-1',
        read ? 'bg-gray-50' : 'bg-red-50 cursor-pointer'
      )}
    >
      <p className="font-medium">{title}</p>
      <p className="text-sm text-gray-600">{message}</p>
      <span className="text-xs text-gray-400">
        {toDateFormat(date, DateFormat.MONTH_DAY_YEAR)}
      </span>
    </div>
  );
};
