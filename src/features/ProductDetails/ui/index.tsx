import clsx from 'clsx';
import { format } from 'date-fns';
import { FC } from 'react';

import { Product } from '@/entities/Product';
import { useToggle } from '@/shared/hooks';
import { Badge, DetailsModalInfoRow, DetailsModalSection } from '@/shared/ui';
import { SideDrawer } from '@/shared/ui/SideDrawer';
import {
  convertToCurrencyString,
  convertEnumToString,
  getProductStatusColor,
} from '@/shared/utils';

interface ProductDetailsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export const ProductDetailsDrawer: FC<ProductDetailsDrawerProps> = ({
  isOpen,
  onClose,
  product,
}) => {
  const isLoadedProductImage = useToggle(false);

  return (
    <SideDrawer
      isOpen={isOpen}
      title="Product Details"
      width="32rem"
      onClose={onClose}
    >
      <div className="flex flex-col gap-8 text-sm text-gray-700">
        <div className="flex flex-col gap-3">
          <img
            alt={product.name}
            className={clsx(
              'w-full h-60 object-cover rounded-md border transition-opacity duration-500',
              {
                'opacity-0': !isLoadedProductImage.value,
                'opacity-100': isLoadedProductImage.value,
              }
            )}
            decoding="async"
            loading="lazy"
            src={product.image}
            onLoad={() => isLoadedProductImage.set(true)}
          />
          <h2 className="text-xl font-semibold text-black">{product.name}</h2>
        </div>

        <DetailsModalSection title="Product Info">
          <DetailsModalInfoRow
            label="ID"
            value={<span>#{product.id.toString().padStart(6, '0')}</span>}
          />
          <DetailsModalInfoRow label="Category" value={product.category} />
          <DetailsModalInfoRow
            label="Price"
            value={convertToCurrencyString(product.price)}
          />
          <DetailsModalInfoRow
            label="Created at"
            value={format(new Date(product.createdAt), 'MMMM dd, yyyy')}
          />
          <DetailsModalInfoRow
            label="Status"
            value={
              <Badge
                label={convertEnumToString(product.status)}
                variant={getProductStatusColor(product.status)}
              />
            }
          />
        </DetailsModalSection>

        <DetailsModalSection title="Description">
          <div className="col-span-2 text-sm text-black whitespace-pre-line">
            {product.description || '—'}
          </div>
        </DetailsModalSection>
      </div>
    </SideDrawer>
  );
};
