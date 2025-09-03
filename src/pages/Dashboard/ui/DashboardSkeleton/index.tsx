import { FC } from 'react';

import { Skeleton } from '@/shared/ui';

export const DashboardSkeleton: FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">KPI</h2>
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl shadow-md flex flex-col gap-2"
            >
              <Skeleton className="rounded-md" height="1.15rem" width="60%" />
              <Skeleton
                className="mt-3 rounded-md"
                height="1.5rem"
                width="80%"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Metrics</h2>
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-[350px] bg-white rounded-xl shadow-md p-6 flex flex-col gap-4"
            >
              <Skeleton className="rounded-md" height="1.5rem" width="150px" />
              <Skeleton className="rounded-md" height="100%" width="100%" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
