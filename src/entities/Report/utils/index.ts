import { ReportType } from '@/entities/Report';
import { BadgeVariant } from '@/shared/ui/Badge';

export function getReportTypeBadgeColor(type: ReportType): BadgeVariant {
  const reportTypeColorMap: Record<ReportType, BadgeVariant> = {
    [ReportType.CUSTOMERS]: BadgeVariant.ORANGE,
    [ReportType.FINANCE]: BadgeVariant.BLUE,
    [ReportType.PRODUCTS]: BadgeVariant.GREEN,
    [ReportType.SALES]: BadgeVariant.RED,
  };

  return reportTypeColorMap[type];
}
