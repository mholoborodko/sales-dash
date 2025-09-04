import { faker } from '@faker-js/faker';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

import { OrderStatus, PaymentMethod } from '@/entities/Order';
import { OrderDetailsDrawer } from '@/features';
import { useToggle } from '@/shared/hooks';
import { Button, LoaderContainer, Table, TableLoader } from '@/shared/ui';

import { useOrdersTableColumns } from '../hooks/useOrdersTableColumns';

const orders = Array.from({ length: 10 }, () => ({
  id: faker.number.int({ min: 1000, max: 9999 }),
  customer: {
    fullName: faker.person.fullName(),
    photo: Math.random() < 0.8 ? faker.image.avatar() : null,
  },
  total: faker.commerce.price({ min: 50, max: 500, dec: 2 }),
  status: faker.helpers.arrayElement(Object.keys(OrderStatus)) as OrderStatus,
  date: faker.date.past({ years: 1 }).toISOString(),
  country: faker.location.country(),
  city: faker.location.city(),
  paymentMethod: faker.helpers.arrayElement(
    Object.keys(PaymentMethod)
  ) as PaymentMethod,
}));

export const OrdersPage: FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedOrderId, setSelectedOrderId] = useState<number>(0);

  const orderDetailsDrawer = useToggle(false);

  const handleOrderClick = useCallback(
    (orderId: number) => {
      setSelectedOrderId(orderId);

      setTimeout(() => {
        orderDetailsDrawer.on();
      }, 10);
    },
    [orderDetailsDrawer]
  );

  const ordersColumns = useOrdersTableColumns({
    openOrderDetails: handleOrderClick,
  });

  const selectedOrder = useMemo(
    () => orders.find(({ id }) => id === selectedOrderId),
    [selectedOrderId]
  );

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [loading]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Orders</h2>
        <Button disabled={loading} label="Add Order" />
      </div>

      <LoaderContainer
        customLoader={<TableLoader columns={8} />}
        isLoading={loading}
        loaderClassName="mt-3"
      >
        <Table className="mt-3" columns={ordersColumns} data={orders || []} />
      </LoaderContainer>

      <OrderDetailsDrawer
        isOpen={orderDetailsDrawer.value}
        order={selectedOrder}
        onClose={orderDetailsDrawer.off}
      />
    </div>
  );
};
