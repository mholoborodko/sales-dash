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

import {
  DashboardChartSection,
  MONTHLY_SALES,
} from '@/features/DashboardCharts';

export const MonthlySales: FC = () => {
  return (
    <DashboardChartSection title="Monthly Sales">
      <ResponsiveContainer height={250} width="100%">
        <BarChart data={MONTHLY_SALES}>
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#6366F1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </DashboardChartSection>
  );
};
