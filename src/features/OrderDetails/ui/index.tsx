import { format } from 'date-fns';
import { FC } from 'react';

import { Order } from '@/entities/Order';
import { DateFormat } from '@/shared/constants';
import {
  Avatar,
  Badge,
  DetailsModalInfoRow,
  DetailsModalSection,
  SideDrawer,
} from '@/shared/ui';
import {
  convertEnumToString,
  convertToCurrencyString,
  getOrderStatusColor,
} from '@/shared/utils';

interface OrderDetailsDrawerProps {
  order: Order | undefined;
  isOpen: boolean;
  onClose: () => void;
}

export const OrderDetailsDrawer: FC<OrderDetailsDrawerProps> = ({
  order,
  isOpen,
  onClose,
}) => {
  if (!order) {
    return null;
  }

  return (
    <SideDrawer
      isOpen={isOpen}
      title="Order Details"
      width="32rem"
      onClose={onClose}
    >
      <div className="flex flex-col gap-8 text-sm text-gray-700">
        <div className="space-y-2">
          <div className="text-2xl font-semibold text-black">
            #{order.id.toString().padStart(6, '0')}
          </div>
          <div className="text-gray-500">
            Placed on {format(new Date(order.date), DateFormat.MONTH_DAY_YEAR)}
          </div>
          <div className="text-gray-500">
            Total:{' '}
            <span className="text-black font-medium">
              {convertToCurrencyString(order.total)}
            </span>
          </div>
          <div>
            <Badge
              label={convertEnumToString(order.status)}
              variant={getOrderStatusColor(order.status)}
            />
          </div>
        </div>

        <DetailsModalSection title="Customer">
          <div className="flex items-center gap-3 col-span-2">
            <Avatar size={40} src={order.customer.photo} />
            <div className="text-sm text-black">{order.customer.fullName}</div>
          </div>
        </DetailsModalSection>

        <DetailsModalSection title="Payment Information">
          <DetailsModalInfoRow
            label="Payment Method"
            value={convertEnumToString(order.paymentMethod)}
          />
        </DetailsModalSection>

        <DetailsModalSection title="Shipping Address">
          <DetailsModalInfoRow label="Country" value={order.country} />
          <DetailsModalInfoRow label="City" value={order.city} />
        </DetailsModalSection>
      </div>
    </SideDrawer>
  );
};
