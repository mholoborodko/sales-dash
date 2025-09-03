import { FC } from 'react';

import { Skeleton } from '@/shared/ui';

export const ProductsGridSkeleton: FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {new Array(20).fill(null).map((_, index) => (
        <div
          key={index}
          className="animate-pulse flex flex-col gap-2 p-4 border rounded-xl shadow-sm"
        >
          <Skeleton className="rounded-lg" height="10rem" width="100%" />
          <Skeleton className="rounded-md" height="2rem" width="75%" />
          <Skeleton className="rounded-md" height="1rem" width="6rem" />
          <Skeleton className="rounded-md" height="2rem" width="100%" />
          <div className="mt-auto">
            <Skeleton className="rounded-md" height="2rem" width="5rem" />
          </div>
        </div>
      ))}
    </div>
  );
};
