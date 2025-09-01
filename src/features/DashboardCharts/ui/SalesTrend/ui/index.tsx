import { FC } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts';

import {
  DashboardChartSection,
  MONTHLY_SALES,
} from '@/features/DashboardCharts';

export const SalesTrend: FC = () => {
  return (
    <DashboardChartSection title="Sales Trend">
      <ResponsiveContainer height={250} width="100%">
        <LineChart data={MONTHLY_SALES}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            dataKey="sales"
            stroke="#6366F1"
            strokeWidth={2}
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </DashboardChartSection>
  );
};
