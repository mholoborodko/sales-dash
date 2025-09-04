import { FC } from 'react';
import {
  ResponsiveContainer,
  Tooltip,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  XAxis,
  YAxis,
} from 'recharts';

import { DashboardChartSection } from '@/features/DashboardCharts';

const salesByRegion = [
  { name: 'North', online: 200, retail: 120 },
  { name: 'South', online: 300, retail: 150 },
  { name: 'East', online: 250, retail: 100 },
  { name: 'West', online: 400, retail: 200 },
];

export const SalesByRegion: FC = () => {
  return (
    <DashboardChartSection title="Sales by Region">
      <ResponsiveContainer height={250} width="100%">
        <BarChart data={salesByRegion}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="online" fill="#6366F1" stackId="a" />
          <Bar dataKey="retail" fill="#14b8a6" stackId="a" />
        </BarChart>
      </ResponsiveContainer>
    </DashboardChartSection>
  );
};
