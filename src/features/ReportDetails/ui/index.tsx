import { format } from 'date-fns';
import { FC } from 'react';

import {
  getReportTypeBadgeColor,
  ReportModel,
  ReportType,
} from '@/entities/Report';
import { DateFormat } from '@/shared/constants';
import {
  Badge,
  Button,
  DetailsModalInfoRow,
  DetailsModalSection,
  SideDrawer,
} from '@/shared/ui';
import { convertEnumToString } from '@/shared/utils';

import { CustomersReportChart } from './CustomersReportChart';
import { FinanceReportChart } from './FinanceReportChart';
import { ProductsReportChart } from './ProductsReportChart';
import { SalesReportChart } from './SalesReportChart';

// import { CustomersReportChart } from './charts/CustomersReportChart';
// import { FinanceReportChart } from './charts/FinanceReportChart';
// import { ProductsReportChart } from './charts/ProductsReportChart';
// import { SalesReportChart } from './charts/SalesReportChart';

interface ReportDetailsDrawerProps {
  report: ReportModel | undefined;
  isOpen: boolean;
  onClose: () => void;
}

export const ReportDetailsDrawer: FC<ReportDetailsDrawerProps> = ({
  report,
  isOpen,
  onClose,
}) => {
  if (!report) return null;

  const renderChart = () => {
    switch (report.type) {
      case ReportType.SALES:
        return <SalesReportChart />;
      case ReportType.CUSTOMERS:
        return <CustomersReportChart />;
      case ReportType.PRODUCTS:
        return <ProductsReportChart />;
      case ReportType.FINANCE:
        return <FinanceReportChart />;
      default:
        return null;
    }
  };

  return (
    <SideDrawer
      isOpen={isOpen}
      rightComponent={<Button label="Download PDF" />}
      title="Report Details"
      width="50%"
      onClose={onClose}
    >
      <div className="flex flex-col gap-4 text-sm text-gray-700">
        <DetailsModalSection title="General Info">
          <DetailsModalInfoRow label="Title" value={report.title} />
          <DetailsModalInfoRow label="Author" value={report.author} />
          <DetailsModalInfoRow
            label="Created At"
            value={format(new Date(report.date), DateFormat.MONTH_DAY_YEAR)}
          />
          <DetailsModalInfoRow
            label="Type"
            value={
              <Badge
                label={convertEnumToString(report.type)}
                variant={getReportTypeBadgeColor(report.type)}
              />
            }
          />
        </DetailsModalSection>

        <div className="w-full border-y border-gray-200 py-4 my-2">
          <h4 className="text-sm font-medium text-gray-500 mb-1">
            Description
          </h4>
          <p className="text-gray-700">{report.description}</p>
        </div>

        <div className="space-y-4">
          <div className="text-sm font-semibold text-gray-600">
            Visualization
          </div>
          <div className="grid grid-cols-1 gap-x-12 gap-y-4">
            {renderChart()}
          </div>
        </div>
      </div>
    </SideDrawer>
  );
};
