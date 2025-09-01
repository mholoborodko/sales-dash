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
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Hello, John Smith</h2>
        <Button label="Download PDF" />
      </div>

      <DashboardKpi />

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
  );
};
