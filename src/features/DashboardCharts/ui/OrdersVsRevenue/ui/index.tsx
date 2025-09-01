import { faker } from '@faker-js/faker';
import { FC } from 'react';
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Scatter,
  ScatterChart,
  ZAxis,
} from 'recharts';

import { DashboardChartSection } from '@/features/DashboardCharts';

const ordersVsRevenue = Array.from({ length: 40 }).map(() => ({
  orders: faker.number.int({ min: 50, max: 500 }),
  revenue: faker.number.int({ min: 1000, max: 10000 }),
}));

export const OrdersVsRevenue: FC = () => {
  return (
    <DashboardChartSection title="Orders vs Revenue">
      <ResponsiveContainer height={250} width="100%">
        <ScatterChart>
          <CartesianGrid />
          <XAxis dataKey="orders" name="Orders" />
          <YAxis dataKey="revenue" name="Revenue" />
          <ZAxis range={[50]} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter data={ordersVsRevenue} fill="#6366F1" />
        </ScatterChart>
      </ResponsiveContainer>
    </DashboardChartSection>
  );
};
