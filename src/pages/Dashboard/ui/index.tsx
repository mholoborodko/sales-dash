import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

import { Button } from '@/shared/ui';

const data = [
  { name: 'Jan', sales: 400 },
  { name: 'Feb', sales: 300 },
  { name: 'Mar', sales: 500 },
  { name: 'Apr', sales: 200 },
  { name: 'May', sales: 450 },
];

export const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Hello, John Smith</h2>
        <Button label="Download PDF" />
      </div>

      <div className="grid grid-cols-2 gap-8">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="w-full h-[300px] bg-white rounded-xl shadow-md p-10"
          >
            <h2 className="text-lg font-semibold mb-4">Monthly Sales</h2>
            <ResponsiveContainer height="100%" width="100%">
              <BarChart data={data}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#6366F1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
