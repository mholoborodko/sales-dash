import { faker } from '@faker-js/faker';
import { FC } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

import { MONTHS } from '@/shared/constants';

export const salesData = MONTHS.map(month => ({
  month,
  sales: faker.number.int({ min: 3000, max: 10000 }),
}));

export const SalesReportChart: FC = () => (
  <ResponsiveContainer height={350} width="100%">
    <AreaChart
      data={salesData}
      margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
    >
      <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
      <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#374151' }} />
      <YAxis tick={{ fontSize: 12, fill: '#374151' }} />
      <Tooltip formatter={(value: number) => value.toLocaleString()} />
      <Area
        dataKey="sales"
        fill="url(#colorSales)"
        fillOpacity={0.3}
        stroke="#3b82f6"
        type="monotone"
      />
      <defs>
        <linearGradient id="colorSales" x1="0" x2="0" y1="0" y2="1">
          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6} />
          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
        </linearGradient>
      </defs>
    </AreaChart>
  </ResponsiveContainer>
);
