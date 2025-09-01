import { faker } from '@faker-js/faker';
import { FC } from 'react';
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from 'recharts';

import { DashboardChartSection } from '@/features/DashboardCharts';

const topProducts = [
  { name: 'Product A', sales: faker.number.int({ min: 100, max: 400 }) },
  { name: 'Product B', sales: faker.number.int({ min: 100, max: 400 }) },
  { name: 'Product C', sales: faker.number.int({ min: 100, max: 400 }) },
  { name: 'Product D', sales: faker.number.int({ min: 100, max: 400 }) },
  { name: 'Product E', sales: faker.number.int({ min: 100, max: 400 }) },
];

export const TopProducts: FC = () => {
  return (
    <DashboardChartSection title="Top Products">
      <ResponsiveContainer height={250} width="100%">
        <BarChart data={topProducts} layout="vertical">
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="sales" fill="#22C55E" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </DashboardChartSection>
  );
};
