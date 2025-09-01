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
  {
    name: faker.commerce.productName(),
    sales: faker.number.int({ min: 100, max: 400 }),
  },
  {
    name: faker.commerce.productName(),
    sales: faker.number.int({ min: 100, max: 400 }),
  },
  {
    name: faker.commerce.productName(),
    sales: faker.number.int({ min: 100, max: 400 }),
  },
  {
    name: faker.commerce.productName(),
    sales: faker.number.int({ min: 100, max: 400 }),
  },
];

export const TopProducts: FC = () => {
  return (
    <DashboardChartSection title="Top Products">
      <ResponsiveContainer height={250} width="100%">
        <BarChart
          barSize={30}
          data={topProducts}
          layout="vertical"
          margin={{ left: 35 }}
        >
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" tickMargin={5} type="category" />
          <Tooltip />
          <Bar dataKey="sales" fill="#22C55E" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </DashboardChartSection>
  );
};
