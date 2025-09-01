import { faker } from '@faker-js/faker';
import { FC } from 'react';
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  AreaChart,
  Legend,
} from 'recharts';

import { DashboardChartSection, MONTHS } from '@/features/DashboardCharts';

const revenueVsExpenses = MONTHS.map(m => ({
  name: m,
  revenue: faker.number.int({ min: 400, max: 700 }),
  expenses: faker.number.int({ min: 200, max: 500 }),
}));

export const RevenueVsExpenses: FC = () => {
  return (
    <DashboardChartSection title="Revenue vs Expense">
      <ResponsiveContainer height={250} width="100%">
        <AreaChart data={revenueVsExpenses}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            dataKey="revenue"
            fill="#6366F1"
            fillOpacity={0.4}
            stroke="#6366F1"
            type="monotone"
          />
          <Area
            dataKey="expenses"
            fill="#F97316"
            fillOpacity={0.3}
            stroke="#F97316"
            type="monotone"
          />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardChartSection>
  );
};
