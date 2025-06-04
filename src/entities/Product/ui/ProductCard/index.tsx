import clsx from 'clsx';
import { FC } from 'react';

import { DateFormat } from '@/shared/constants';
import { useToggle } from '@/shared/hooks';
import { convertToCurrencyString, toDateFormat } from '@/shared/utils';

import { Product } from '../../model';

interface ProductCardProps extends Product {}

export const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  image,
  description,
  price,
  category,
  createdAt,
}) => {
  const isLoadedProductImage = useToggle(false);

  return (
    <div className="rounded-xl border p-4 shadow-sm hover:shadow-md transition bg-white cursor-pointer">
      <div className="relative h-40 w-full rounded-md overflow-hidden bg-gray-200">
        {!isLoadedProductImage.value && (
          <div className="absolute inset-0 animate-pulse bg-gray-200" />
        )}

        <img
          alt={name}
          className={clsx(
            'h-40 w-full object-cover rounded-md transition-opacity duration-500',
            {
              'opacity-0': !isLoadedProductImage.value,
              'opacity-100': isLoadedProductImage.value,
            }
          )}
          decoding="async"
          loading="lazy"
          src={image}
          onLoad={() => isLoadedProductImage.set(true)}
        />
      </div>

      <div className="mt-3 space-y-1">
        <h3 className="text-base font-semibold line-clamp-1">{name}</h3>
        <p className="text-xs text-gray-400">
          #{id.toString().padStart(6, '0')}
        </p>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between text-sm mt-2">
          <span className="font-medium text-primary">
            {convertToCurrencyString(price)}
          </span>
          <span className="text-xs text-gray-500">{category}</span>
        </div>

        <p className="text-[10px] text-gray-400 mt-1">
          Added: {toDateFormat(createdAt, DateFormat.MONTH_DAY_YEAR)}
        </p>
      </div>
    </div>
  );
};
