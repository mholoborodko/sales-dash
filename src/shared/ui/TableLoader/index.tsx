import { FC } from 'react';

import { Skeleton } from '../Skeleton';

interface TableLoaderProps {
  columns: number;
  rows?: number;
}

export const TableLoader: FC<TableLoaderProps> = ({ columns, rows = 30 }) => {
  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
      <table className="min-w-full text-[10px] text-left border-collapse w-full table-fixed">
        <thead>
          <tr>
            {Array.from({ length: columns }).map((_, idx) => (
              <th
                key={idx}
                className="px-4 py-2 h-[35px] font-semibold text-gray-700 border border-gray-200"
              >
                <Skeleton height={12} width="80%" />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIdx) => (
            <tr key={rowIdx}>
              {Array.from({ length: columns }).map((_, colIdx) => (
                <td
                  key={colIdx}
                  className="px-4 py-2 h-[35px] text-black border border-gray-200"
                >
                  <Skeleton height={12} width="90%" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
