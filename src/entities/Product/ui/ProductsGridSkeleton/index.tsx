import { FC } from 'react';

export const ProductsGridSkeleton: FC = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {new Array(20).fill(null).map((_, index) => (
        <div
          key={index}
          className="animate-pulse flex flex-col gap-2 p-4 border rounded-xl shadow-sm"
        >
          <div className="w-full h-40 bg-gray-200 rounded-lg" />
          <div className="h-8 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-24">
            <span className="block h-full bg-gray-200 rounded" />
          </div>
          <div className="h-8 bg-gray-200 rounded w-full" />
          <div className="mt-auto h-8 bg-gray-300 rounded w-20" />
        </div>
      ))}
    </div>
  );
};
