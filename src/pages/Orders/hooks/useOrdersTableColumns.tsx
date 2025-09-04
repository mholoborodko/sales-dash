import { createColumnHelper } from '@tanstack/react-table';
import { useMemo } from 'react';

import { Order } from '@/entities/Order';
import { DateFormat } from '@/shared/constants';
import { Badge } from '@/shared/ui';
import { Avatar } from '@/shared/ui/Avatar';
import {
  convertEnumToString,
  convertToCurrencyString,
  getOrderStatusColor,
  toDateFormat,
} from '@/shared/utils';

import { MoreCell } from '../ui/MoreCell';

const columnHelper = createColumnHelper<Order>();

interface UseOrdersTableColumnsProps {
  openOrderDetails: (orderId: number) => void;
}

export const useOrdersTableColumns = ({
  openOrderDetails,
}: UseOrdersTableColumnsProps) => {
  return useMemo(() => {
    return [
      columnHelper.accessor('id', {
        header: 'Order ID',
        cell: ({ getValue }) => (
          <span onClick={() => openOrderDetails(getValue())}>
            #{getValue().toString().padStart(6, '0')}
          </span>
        ),
        meta: {
          headerClassName: 'text-left',
          cellClassName:
            'font-medium underline underline-offset-[3px] cursor-pointer',
        },
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
        header: 'Total',
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
          headerClassName: 'text-center border-r-0',
          cellClassName: 'text-center',
        },
      }),
      columnHelper.display({
        id: 'more',
        cell: MoreCell,
        meta: {
          headerClassName: 'text-center border-l-0',
          cellClassName: 'text-center',
          width: 65,
        },
      }),
    ];
  }, [openOrderDetails]);
};
