import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';

import { CustomerDetailsDrawer } from '@/features';
import { useToggle } from '@/shared/hooks';
import { Button, LoaderContainer, Table, TableLoader } from '@/shared/ui';

import { useCustomerTableColumns } from '../hooks/useCustomerTableColumns';

const data = Array.from({ length: 20 }, () => ({
  id: faker.string.uuid(),
  customer: {
    fullName: faker.person.fullName(),
    photo: Math.random() < 0.8 ? faker.image.avatar() : null,
  },
  email: faker.internet.email(),
  phone: faker.phone.number({ style: 'international' }),
  company: faker.company.name(),
  country: faker.location.country(),
  city: faker.location.city(),
  createdAt: faker.date.past({ years: 1 }).toISOString(),
  isActive: faker.datatype.boolean(),
}));

export const CustomersPage = () => {
  const customerDetailsDrawer = useToggle(false);

  const customerColumns = useCustomerTableColumns({
    openCustomerDetails: customerDetailsDrawer.on,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [loading]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Customers</h2>
        <Button disabled={loading} label="Add Customer" />
      </div>
      <LoaderContainer
        customLoader={<TableLoader columns={8} />}
        isLoading={loading}
        loaderClassName="mt-4"
      >
        <Table className="mt-3" columns={customerColumns} data={data || []} />
      </LoaderContainer>

      <CustomerDetailsDrawer
        customer={data[0]}
        isOpen={customerDetailsDrawer.value}
        onClose={customerDetailsDrawer.off}
      />
    </div>
  );
};
