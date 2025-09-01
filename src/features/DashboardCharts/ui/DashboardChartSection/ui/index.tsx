import { FC, PropsWithChildren } from 'react';

interface DashboardChartSectionProps {
  title: string;
}

export const DashboardChartSection: FC<
  PropsWithChildren<DashboardChartSectionProps>
> = ({ title, children }) => {
  return (
    <div className="h-[350px] bg-white rounded-xl shadow-md p-6">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
};
