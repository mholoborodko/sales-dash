import { faker } from '@faker-js/faker';
import { FC } from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  ReferenceLine,
} from 'recharts';

const productsData = Array.from({ length: 10 }).map(() => ({
  name: faker.commerce.productName(),
  sales: faker.number.int({ min: 500, max: 3000 }),
}));

const averageSales =
  productsData.reduce((sum, item) => sum + item.sales, 0) / productsData.length;

export const ProductsReportChart: FC = () => (
  <ResponsiveContainer height={350} width="100%">
    <ComposedChart
      data={productsData}
      margin={{ top: 20, right: 20, bottom: 80, left: 0 }}
    >
      <XAxis
        dataKey="name"
        height={60}
        interval={0}
        tick={({ x, y, payload }) => {
          const text =
            payload.value.length > 10
              ? payload.value.slice(0, 10) + '…'
              : payload.value;
          return (
            <text
              fill="#374151"
              fontSize={12}
              textAnchor="end"
              transform={`rotate(-35, ${x}, ${y + 10})`}
              x={x}
              y={y + 10}
            >
              {text}
            </text>
          );
        }}
      />
      <YAxis />
      <Tooltip />
      <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]}>
        <LabelList dataKey="sales" position="top" />
      </Bar>
      <Line dataKey="sales" stroke="#fbbf24" strokeWidth={2} type="monotone" />

      <ReferenceLine stroke="#ef4444" strokeDasharray="3 3" y={averageSales} />
    </ComposedChart>
  </ResponsiveContainer>
);
