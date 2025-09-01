import { faker } from '@faker-js/faker';
import { FC } from 'react';
import {
  ResponsiveContainer,
  Tooltip,
  RadarChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
} from 'recharts';

import { DashboardChartSection } from '@/features/DashboardCharts';

const customerSatisfaction = [
  { category: 'Service', score: faker.number.int({ min: 50, max: 100 }) },
  { category: 'Quality', score: faker.number.int({ min: 50, max: 100 }) },
  { category: 'Delivery', score: faker.number.int({ min: 50, max: 100 }) },
  { category: 'Support', score: faker.number.int({ min: 50, max: 100 }) },
];

export const CustomerSatisfaction: FC = () => {
  return (
    <DashboardChartSection title="Customer Satisfaction">
      <ResponsiveContainer height={250} width="100%">
        <RadarChart data={customerSatisfaction}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" />
          <PolarRadiusAxis />
          <Tooltip />
          <Radar
            dataKey="score"
            fill="#E11D48"
            fillOpacity={0.5}
            name="Score"
            stroke="#E11D48"
          />
        </RadarChart>
      </ResponsiveContainer>
    </DashboardChartSection>
  );
};
