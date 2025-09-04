import { createColumnHelper } from '@tanstack/react-table';
import { useMemo } from 'react';

import { Customer, CustomerStatus } from '@/entities/Customer';
import { DateFormat } from '@/shared/constants';
import { Badge } from '@/shared/ui';
import { Avatar } from '@/shared/ui/Avatar';
import { BadgeVariant } from '@/shared/ui/Badge';
import { convertEnumToString, toDateFormat } from '@/shared/utils';

import { MoreCell } from '../ui/MoreCell';

const columnHelper = createColumnHelper<Customer>();

interface UseCustomersTableColumnsProps {
  openCustomerDetails: (customerId: string) => void;
}

export const useCustomersTableColumns = ({
  openCustomerDetails,
}: UseCustomersTableColumnsProps) => {
  return useMemo(() => {
    return [
      columnHelper.display({
        header: 'Full Name',
        cell: ctx => {
          const {
            id,
            customer: { photo, fullName },
          } = ctx.row.original;
          return (
            <div className="flex items-center gap-2.5">
              <Avatar src={photo} />
              <span
                className="hover:opacity-80 line-clamp-1"
                onClick={() => openCustomerDetails(id)}
              >
                {fullName}
              </span>
            </div>
          );
        },
        meta: {
          headerClassName: 'text-left',
          cellClassName:
            'font-medium underline underline-offset-[3px] cursor-pointer',
        },
      }),
      columnHelper.accessor('email', {
        header: 'Email',
        cell: ({ getValue }) => <span>{getValue().toLowerCase()}</span>,
        meta: {
          headerClassName: 'text-left',
          cellClassName: 'text-blue-500',
        },
      }),
      columnHelper.accessor('phone', {
        header: 'Phone',
        cell: ({ getValue }) => getValue(),
      }),
      columnHelper.accessor('company', {
        header: 'Company',
        cell: ({ getValue }) => getValue(),
      }),
      columnHelper.accessor('country', {
        header: 'Country',
        cell: ({ getValue }) => getValue(),
      }),
      columnHelper.accessor('city', {
        header: 'City',
        cell: ({ getValue }) => getValue(),
      }),
      columnHelper.accessor('createdAt', {
        header: 'Created At',
        cell: ({ getValue }) => (
          <span>{toDateFormat(getValue(), DateFormat.MONTH_DAY_YEAR)}</span>
        ),
        meta: {
          headerClassName: 'text-left',
          cellClassName: 'text-gray-500 whitespace-nowrap',
        },
      }),
      columnHelper.accessor('isActive', {
        header: 'Status',
        cell: ({ getValue }) => (
          <Badge
            label={
              getValue()
                ? convertEnumToString(CustomerStatus.ACTIVE)
                : convertEnumToString(CustomerStatus.INACTIVE)
            }
            variant={getValue() ? BadgeVariant.GREEN : BadgeVariant.RED}
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
  }, [openCustomerDetails]);
};
