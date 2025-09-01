import { FC } from 'react';

import { DashboardKpi } from '@/features';
import {
  CustomerSatisfaction,
  MonthlySales,
  OrdersVsRevenue,
  RevenueVsExpenses,
  SalesByCategory,
  SalesByRegion,
  SalesTrend,
  TopProducts,
} from '@/features/DashboardCharts';
import { Button } from '@/shared/ui';

export const DashboardPage: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Hello, John Smith</h2>
          <span className="text-gray-400 text-xs">
            Here you'll find your KPIs and key metrics
          </span>
        </div>
        <Button label="Download PDF" />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">KPI</h2>
        <DashboardKpi />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Metrics</h2>
        <div className="grid grid-cols-2 gap-4">
          <SalesTrend />
          <SalesByCategory />
          <SalesByRegion />
          <RevenueVsExpenses />
          <TopProducts />
          <MonthlySales />
          <CustomerSatisfaction />
          <OrdersVsRevenue />
        </div>
      </div>
    </div>
  );
};
