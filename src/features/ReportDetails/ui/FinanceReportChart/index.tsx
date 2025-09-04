import { faker } from '@faker-js/faker';
import { FC } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { MONTHS } from '@/shared/constants';

export const financeData = MONTHS.map(month => ({
  month,
  revenue: faker.number.int({ min: 5000, max: 15000 }),
  expenses: faker.number.int({ min: 2000, max: 10000 }),
}));

export const FinanceReportChart: FC = () => (
  <ResponsiveContainer height={350} width="100%">
    <LineChart data={financeData}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        dataKey="revenue"
        stroke="#10b981"
        strokeWidth={2}
        type="monotone"
      />
      <Line
        dataKey="expenses"
        stroke="#ef4444"
        strokeWidth={2}
        type="monotone"
      />
    </LineChart>
  </ResponsiveContainer>
);
