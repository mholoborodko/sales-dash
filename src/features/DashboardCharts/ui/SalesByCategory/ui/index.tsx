import { faker } from '@faker-js/faker';
import { FC } from 'react';
import { ResponsiveContainer, Tooltip, Cell, Pie, PieChart } from 'recharts';

import { COLORS, DashboardChartSection } from '@/features/DashboardCharts';

const salesByCategory = [
  { name: 'Electronics', value: faker.number.int({ min: 100, max: 400 }) },
  { name: 'Clothing', value: faker.number.int({ min: 100, max: 400 }) },
  { name: 'Furniture', value: faker.number.int({ min: 100, max: 400 }) },
  { name: 'Sports', value: faker.number.int({ min: 100, max: 400 }) },
];

export const SalesByCategory: FC = () => {
  return (
    <DashboardChartSection title="Sales by Category">
      <ResponsiveContainer height={250} width="100%">
        <PieChart>
          <Pie label data={salesByCategory} dataKey="value" outerRadius={90}>
            {salesByCategory.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </DashboardChartSection>
  );
};
