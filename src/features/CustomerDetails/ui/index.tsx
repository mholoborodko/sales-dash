import { format } from 'date-fns';

import { Customer, CustomerStatus } from '@/entities/Customer';
import { DateFormat } from '@/shared/constants';
import { Avatar, Badge, SideDrawer } from '@/shared/ui';
import { BadgeVariant } from '@/shared/ui/Badge';
import { convertEnumToString } from '@/shared/utils';

interface CustomerDetailsDrawerProps {
  customer: Customer;
  isOpen: boolean;
  onClose: () => void;
}

export const CustomerDetailsDrawer = ({
  customer,
  isOpen,
  onClose,
}: CustomerDetailsDrawerProps) => {
  return (
    <SideDrawer
      isOpen={isOpen}
      title="Customer Details"
      width="32rem"
      onClose={onClose}
    >
      <div className="flex flex-col gap-8 text-sm text-gray-700">
        <div className="flex items-center gap-4">
          <Avatar size={90} src={customer.customer.photo} />
          <div>
            <div className="text-xl font-semibold text-black">
              {customer.customer.fullName}
            </div>
            <div className="text-sm text-gray-500">
              Joined{' '}
              {format(new Date(customer.createdAt), DateFormat.MONTH_DAY_YEAR)}
            </div>
          </div>
        </div>

        <Section title="Contact Information">
          <InfoRow label="Email" value={customer.email.toLowerCase()} />
          <InfoRow label="Phone" value={customer.phone} />
        </Section>

        <Section title="Location">
          <InfoRow label="Country" value={customer.country} />
          <InfoRow label="City" value={customer.city} />
        </Section>

        <Section title="Additional Details">
          <InfoRow label="Company" value={customer.company} />
          <InfoRow
            label="Status"
            value={
              <Badge
                label={
                  customer.isActive
                    ? convertEnumToString(CustomerStatus.ACTIVE)
                    : convertEnumToString(CustomerStatus.INACTIVE)
                }
                variant={
                  customer.isActive ? BadgeVariant.GREEN : BadgeVariant.RED
                }
              />
            }
          />
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
