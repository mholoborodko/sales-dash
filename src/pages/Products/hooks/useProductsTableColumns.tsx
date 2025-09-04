import { createColumnHelper } from '@tanstack/react-table';
import { useMemo } from 'react';

import { Product } from '@/entities/Product';
import { DateFormat } from '@/shared/constants';
import { Badge } from '@/shared/ui';
import {
  toDateFormat,
  convertToCurrencyString,
  convertEnumToString,
  getProductStatusColor,
} from '@/shared/utils';

import { MoreCell } from '../ui/MoreCell';

const columnHelper = createColumnHelper<Product>();

interface UseProductsTableColumnsProps {
  openProductDetails: (productId: number) => void;
}

export const useProductsTableColumns = ({
  openProductDetails,
}: UseProductsTableColumnsProps) => {
  return useMemo(() => {
    return [
      columnHelper.accessor('id', {
        header: 'Product ID',
        cell: ({ getValue }) => (
          <span onClick={() => openProductDetails(getValue())}>
            #{getValue().toString().padStart(6, '0')}
          </span>
        ),
        meta: {
          headerClassName: 'text-left',
          cellClassName:
            'font-medium underline underline-offset-[3px] cursor-pointer',
        },
      }),
      columnHelper.accessor('name', {
        header: 'Name',
        cell: ({ getValue }) => (
          <span className="font-semibold">{getValue()}</span>
        ),
      }),
      columnHelper.accessor('category', {
        header: 'Category',
        cell: ({ getValue }) => getValue(),
      }),
      columnHelper.accessor('price', {
        header: 'Price',
        cell: ({ getValue }) => convertToCurrencyString(getValue()),
        meta: {
          cellClassName: 'font-medium whitespace-nowrap',
        },
      }),
      columnHelper.accessor('createdAt', {
        header: 'Created At',
        cell: ({ getValue }) => (
          <span className="text-gray-500">
            {toDateFormat(getValue(), DateFormat.MONTH_DAY_YEAR)}
          </span>
        ),
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        cell: ({ getValue }) => (
          <Badge
            label={convertEnumToString(getValue())}
            variant={getProductStatusColor(getValue())}
          />
        ),
        meta: {
          headerClassName: 'text-center w-[140px] border-r-0',
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
  }, [openProductDetails]);
};
