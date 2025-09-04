import { faker } from '@faker-js/faker';
import { FC } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import { MONTHS } from '@/shared/constants';

export const customersData = MONTHS.map(month => ({
  month,
  active: faker.number.int({ min: 200, max: 1000 }),
  inactive: faker.number.int({ min: 50, max: 300 }),
}));

export const CustomersReportChart: FC = () => (
  <ResponsiveContainer height={350} width="100%">
    <BarChart data={customersData}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="active" fill="#14b8a6" name="Active" />
      <Bar dataKey="inactive" fill="#9ca3af" name="Inactive" />
    </BarChart>
  </ResponsiveContainer>
);
