import { createColumnHelper } from '@tanstack/react-table';
import { useMemo } from 'react';

import { Order } from '@/entities/Order';
import { DateFormat } from '@/shared/constants';
import { Badge } from '@/shared/ui';
import { Avatar } from '@/shared/ui/Avatar';
import {
  convertEnumToString,
  convertToCurrencyString,
  toDateFormat,
} from '@/shared/utils';

import { getOrderStatusColor } from '../utils';

const columnHelper = createColumnHelper<Order>();

export const useOrdersTableColumns = () => {
  return useMemo(() => {
    return [
      columnHelper.accessor('id', {
        header: 'Order ID',
      }),
      columnHelper.display({
        header: 'Customer',
        cell: ctx => {
          const {
            customer: { photo, fullName },
          } = ctx.row.original;
          return (
            <div className="flex items-center gap-2.5">
              <Avatar src={photo} />
              <span className="hover:opacity-80 line-clamp-1">{fullName}</span>
            </div>
          );
        },
        meta: {
          headerClassName: 'text-left',
          cellClassName: 'font-medium ',
        },
      }),
      columnHelper.accessor('country', {
        header: 'Country',
        cell: ({ getValue }) => getValue(),
      }),
      columnHelper.accessor('city', {
        header: 'City',
        cell: ({ getValue }) => getValue(),
      }),
      columnHelper.accessor('date', {
        header: 'Date',
        cell: ({ getValue }) => (
          <span>{toDateFormat(getValue(), DateFormat.MONTH_DAY_YEAR)}</span>
        ),
        meta: {
          headerClassName: 'text-left',
          cellClassName: 'text-gray-500 whitespace-nowrap',
        },
      }),
      columnHelper.accessor('paymentMethod', {
        header: 'Payment method',
        cell: ({ getValue }) => convertEnumToString(getValue()),
      }),
      columnHelper.accessor('total', {
        header: 'Price',
        cell: ({ getValue }) => (
          <span>{convertToCurrencyString(getValue())}</span>
        ),
        meta: {
          headerClassName: 'text-left',
          cellClassName: 'font-semibold',
        },
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: ({ getValue }) => (
          <Badge
            label={convertEnumToString(getValue())}
            variant={getOrderStatusColor(getValue())}
          />
        ),
        meta: {
          headerClassName: 'text-center',
          cellClassName: 'text-center',
        },
      }),
    ];
  }, []);
};
