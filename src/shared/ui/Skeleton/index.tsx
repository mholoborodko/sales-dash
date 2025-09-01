import clsx from 'clsx';
import React, { FC } from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  width?: string | number;
  height?: string | number;
  circle?: boolean;
}

export const Skeleton: FC<SkeletonProps> = ({
  className,
  width = '100%',
  height = '1em',
  circle = false,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'bg-gray-200 animate-pulse',
        circle ? 'rounded-full' : 'rounded-md',
        className
      )}
      style={{ width, height }}
      {...rest}
    />
  );
};
