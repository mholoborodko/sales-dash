import { faker } from '@faker-js/faker';
import { FC } from 'react';

import { convertToCurrencyString } from '@/shared/utils';

export const DashboardKpi: FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="p-4 bg-white rounded-xl shadow-md">
        <p className="text-gray-500">Total Sales</p>
        <h2 className="mt-2 text-2xl text-green-500 font-bold">
          {convertToCurrencyString(faker.number.float(50000))}
        </h2>
      </div>
      <div className="p-4 bg-white rounded-xl shadow-md">
        <p className="text-gray-500">Customers</p>
        <h2 className="mt-2 text-2xl font-bold">{faker.number.int(2000)}</h2>
      </div>
      <div className="p-4 bg-white rounded-xl shadow-md">
        <p className="text-gray-500">Orders</p>
        <h2 className="mt-2 text-2xl font-bold">{faker.number.int(1500)}</h2>
      </div>
      <div className="p-4 bg-white rounded-xl shadow-md">
        <p className="text-gray-500">Avg. Order Value</p>
        <h2 className="mt-2 text-2xl font-bold text-green-500">
          {convertToCurrencyString(faker.number.float(200))}
        </h2>
      </div>
    </div>
  );
};
