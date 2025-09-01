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

const topProducts = Array.from({ length: 8 }, () => ({
  name: faker.commerce.productName(),
  sales: faker.number.int({ min: 100, max: 400 }),
}));

export const TopProducts: FC = () => {
  return (
    <DashboardChartSection title="Top Products">
      <ResponsiveContainer height={250} width="100%">
        <BarChart
          barCategoryGap={20}
          barGap={4}
          barSize={20}
          data={topProducts}
          layout="vertical"
          margin={{ left: 60, right: 20 }}
        >
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis
            dataKey="name"
            interval={0}
            tick={({ x, y, payload }) => {
              const label =
                payload.value.length > 10
                  ? payload.value.slice(0, 10) + '…'
                  : payload.value;
              return (
                <text textAnchor="end" x={x} y={y + 4}>
                  <title>{payload.value}</title>
                  {label}
                </text>
              );
            }}
            tickMargin={10}
            type="category"
            width={60}
          />
          <Tooltip />
          <Bar dataKey="sales" fill="#22C55E" radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </DashboardChartSection>
  );
};
