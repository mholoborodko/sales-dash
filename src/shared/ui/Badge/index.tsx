import clsx from 'clsx';
import React from 'react';

export enum BadgeVariant {
  GRAY = 'GRAY',
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  RED = 'RED',
  YELLOW = 'YELLOW',
  ORANGE = 'ORANGE',
}

const badgeStyles: Record<BadgeVariant, string> = {
  [BadgeVariant.GRAY]: 'bg-gray-100 text-gray-600',
  [BadgeVariant.BLUE]: 'bg-blue-100 text-blue-600',
  [BadgeVariant.GREEN]: 'bg-green-100 text-green-600',
  [BadgeVariant.RED]: 'bg-red-100 text-red-600',
  [BadgeVariant.YELLOW]: 'bg-yellow-100 text-yellow-600',
  [BadgeVariant.ORANGE]: 'bg-orange-100 text-orange-600',
};

interface BadgeProps {
  variant?: BadgeVariant;
  label: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = BadgeVariant.GRAY,
  label,
  className,
}) => {
  return (
    <span
      className={clsx(
        'inline-block text-center px-2 py-1 text-xs font-semibold rounded-md min-w-[80px]',
        badgeStyles[variant],
        className
      )}
    >
      {label}
    </span>
  );
};
