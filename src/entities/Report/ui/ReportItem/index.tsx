import { FC } from 'react';

import { DateFormat } from '@/shared/constants';
import { Badge, Dropdown, Icon } from '@/shared/ui';
import { DropdownOption } from '@/shared/ui/Dropdown';
import { convertEnumToString, toDateFormat } from '@/shared/utils';

import { ReportModel } from '../../model';
import { getReportTypeColor } from '../../utils';

interface ReportItemProps extends ReportModel {}

export const ReportItem: FC<ReportItemProps> = ({
  title,
  author,
  date,
  type,
}) => {
  const options: DropdownOption[] = [
    {
      label: 'Edit',
    },
    {
      label: 'Delete',
      className: 'text-red-500',
    },
  ];

  return (
    <div className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-10 rounded-full bg-blue-50">
            <Icon className="text-blue-500" name="report" size={18} />
          </div>
          <h3 className="font-semibold text-gray-800 text-base line-clamp-1">
            {title}
          </h3>
        </div>

        <Dropdown options={options}>
          {() => (
            <button className="flex-center p-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors">
              <Icon name="more" size={20} />
            </button>
          )}
        </Dropdown>
      </div>

      <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Icon className="text-gray-400" name="user" size={14} />
            <span className="truncate max-w-[140px]">{author}</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-1">
            <Icon className="text-gray-400" name="calendar" size={14} />
            <span>{toDateFormat(date, DateFormat.MONTH_DAY_YEAR)}</span>
          </div>
        </div>

        <Badge
          className="text-xs"
          label={convertEnumToString(type)}
          variant={getReportTypeColor(type)}
        />
      </div>
    </div>
  );
};
