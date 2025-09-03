import { FC } from 'react';

import { Skeleton } from '@/shared/ui';

export const NotificationsSkeleton: FC = () => {
  return (
    <div className="max-h-80 overflow-hidden flex flex-col gap-2">
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="p-3 rounded-lg border flex flex-col gap-1">
          <Skeleton className="mb-1" height="1rem" width="60%" />

          <Skeleton className="mb-1" height="0.75rem" width="100%" />
          <Skeleton className="mb-1" height="0.75rem" width="80%" />

          <Skeleton height="0.625rem" width="25%" />
        </div>
      ))}
    </div>
  );
};
