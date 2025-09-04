import { faker } from '@faker-js/faker';
import { FC, useCallback, useEffect, useMemo, useState } from 'react';

import {
  ReportItem,
  ReportModel,
  REPORTS_TITLES,
  ReportsSkeleton,
  ReportType,
} from '@/entities/Report';
import { ReportDetailsDrawer } from '@/features';
import { useToggle } from '@/shared/hooks';
import { Button, LoaderContainer } from '@/shared/ui';

const reports: ReportModel[] = Array.from({ length: 20 }).map(() => ({
  id: faker.string.uuid(),
  title: faker.helpers.arrayElement(REPORTS_TITLES),
  description: faker.lorem.sentence(50),
  date: faker.date.recent({ days: 30 }).toISOString(),
  type: faker.helpers.arrayElement(Object.keys(ReportType)) as ReportType,
  author: faker.person.fullName(),
}));

export const ReportsPage: FC = () => {
  const [loading, setLoading] = useState(true);
  const [selectedReportId, setSelectedReportId] = useState<string>('');

  const reportDetailsDrawer = useToggle(false);

  const selectedReport = useMemo(
    () => reports.find(({ id }) => id === selectedReportId),
    [selectedReportId]
  );

  const handleReportClick = useCallback(
    (reportId: string) => {
      setSelectedReportId(reportId);

      setTimeout(() => {
        reportDetailsDrawer.on();
      }, 10);
    },
    [reportDetailsDrawer]
  );

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [loading]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Reports</h2>
        <Button disabled={loading} label="Add Report" />
      </div>

      <LoaderContainer customLoader={<ReportsSkeleton />} isLoading={loading}>
        <div className="grid grid-cols-3 gap-6">
          {reports.map(report => (
            <ReportItem
              key={report.id}
              {...report}
              onReportClick={handleReportClick}
            />
          ))}
        </div>
      </LoaderContainer>

      <ReportDetailsDrawer
        isOpen={reportDetailsDrawer.value}
        report={selectedReport}
        onClose={reportDetailsDrawer.off}
      />
    </div>
  );
};
