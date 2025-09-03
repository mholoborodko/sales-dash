import { FC } from 'react';

import { Skeleton } from '@/shared/ui';

export const ReportsSkeleton: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-6 overflow-hidden">
      {Array.from({ length: 40 }).map((_, index) => (
        <div
          key={index}
          className="p-5 bg-white rounded-xl shadow-sm animate-pulse"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center size-10 rounded-full bg-gray-100">
                <Skeleton className="rounded-full" height="18px" width="18px" />
              </div>
              <Skeleton className="rounded-md" height="1rem" width="120px" />
            </div>

            <div className="flex items-center">
              <Skeleton className="rounded-md" height="32px" width="32px" />
            </div>
          </div>

          <div className="mt-2 flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <Skeleton className="rounded-md" height="14px" width="80px" />
              <Skeleton className="rounded-full" height="14px" width="14px" />
              <Skeleton className="rounded-md" height="14px" width="60px" />
            </div>

            <Skeleton className="rounded-full" height="24px" width="80px" />
          </div>
        </div>
      ))}
    </div>
  );
};
