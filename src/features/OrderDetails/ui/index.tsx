import { format } from 'date-fns';

import { Order } from '@/entities/Order';
import { DateFormat } from '@/shared/constants';
import { Avatar, Badge, SideDrawer } from '@/shared/ui';
import {
  convertEnumToString,
  convertToCurrencyString,
  getOrderStatusColor,
} from '@/shared/utils';

interface OrderDetailsDrawerProps {
  order: Order;
  isOpen: boolean;
  onClose: () => void;
}

export const OrderDetailsDrawer = ({
  order,
  isOpen,
  onClose,
}: OrderDetailsDrawerProps) => {
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

        <Section title="Customer">
          <div className="flex items-center gap-3 col-span-2">
            <Avatar size={40} src={order.customer.photo} />
            <div className="text-sm text-black">{order.customer.fullName}</div>
          </div>
        </Section>

        <Section title="Payment Information">
          <InfoRow
            label="Payment Method"
            value={convertEnumToString(order.paymentMethod)}
          />
        </Section>

        <Section title="Shipping Address">
          <InfoRow label="Country" value={order.country} />
          <InfoRow label="City" value={order.city} />
        </Section>
      </div>
    </SideDrawer>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <div className="text-sm font-semibold text-gray-600">{title}</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
      {children}
    </div>
  </div>
);

const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div>
    <div className="text-xs text-gray-500 mb-1">{label}</div>
    <div className="text-sm text-black break-all">{value}</div>
  </div>
);
