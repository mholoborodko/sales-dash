import { format } from 'date-fns';
import { FC } from 'react';

import { Customer, CustomerStatus } from '@/entities/Customer';
import { DateFormat } from '@/shared/constants';
import {
  Avatar,
  Badge,
  DetailsModalInfoRow,
  DetailsModalSection,
  SideDrawer,
} from '@/shared/ui';
import { BadgeVariant } from '@/shared/ui/Badge';
import { convertEnumToString } from '@/shared/utils';

interface CustomerDetailsDrawerProps {
  customer: Customer | undefined;
  isOpen: boolean;
  onClose: () => void;
}

export const CustomerDetailsDrawer: FC<CustomerDetailsDrawerProps> = ({
  customer,
  isOpen,
  onClose,
}) => {
  if (!customer) {
    return null;
  }

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

        <DetailsModalSection title="Contact Information">
          <DetailsModalInfoRow
            label="Email"
            value={customer.email.toLowerCase()}
          />
          <DetailsModalInfoRow label="Phone" value={customer.phone} />
        </DetailsModalSection>

        <DetailsModalSection title="Location">
          <DetailsModalInfoRow label="Country" value={customer.country} />
          <DetailsModalInfoRow label="City" value={customer.city} />
        </DetailsModalSection>

        <DetailsModalSection title="Additional Details">
          <DetailsModalInfoRow label="Company" value={customer.company} />
          <DetailsModalInfoRow
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
        </DetailsModalSection>
      </div>
    </SideDrawer>
  );
};
