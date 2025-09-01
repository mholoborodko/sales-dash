import { faker } from '@faker-js/faker';
import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';

import {
  ProductCard,
  ProductsGridSkeleton,
  ProductStatus,
  ProductViewMode,
} from '@/entities/Product';
import { ProductDetailsDrawer } from '@/features';
import { useToggle } from '@/shared/hooks';
import { Icon, LoaderContainer, Table, TableLoader } from '@/shared/ui';

import { useProductsTableColumns } from '../hooks/useProductsTableColumns';

export const data = Array.from({ length: 20 }, () => ({
  id: faker.number.int({ min: 1000, max: 9999 }),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  image: `https://picsum.photos/seed/${Math.floor(
    Math.random() * 10000
  )}/600/400`,
  price: parseFloat(faker.commerce.price({ min: 10, max: 1000 })),
  category: faker.commerce.department(),
  createdAt: faker.date.past({ years: 1 }).toISOString(),
  status: faker.helpers.arrayElement(
    Object.keys(ProductStatus)
  ) as ProductStatus,
}));

export const ProductsPage: FC = () => {
  const [view, setView] = useState<ProductViewMode>(ProductViewMode.GRID);

  const productDetailsDrawer = useToggle(false);

  const ordersColumns = useProductsTableColumns({
    openProductDetails: productDetailsDrawer.on,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timer);
  }, [view]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center  justify-between">
        <h2 className="text-lg font-semibold">Products</h2>
        <div className=" h-[38.5px] flex items-center rounded-md border bg-white shadow-sm">
          <button
            aria-label="Grid view"
            className={clsx(
              'p-2 transition-colors flex flex-center',
              view === ProductViewMode.GRID
                ? 'text-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            )}
            onClick={() => setView(ProductViewMode.GRID)}
          >
            <Icon name="grid-view" />
          </button>

          <div className="h-7 w-px bg-gray-200" />

          <button
            aria-label="Table view"
            className={clsx(
              'p-2 transition-colors flex flex-center',
              view === ProductViewMode.TABLE
                ? 'text-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            )}
            onClick={() => setView(ProductViewMode.TABLE)}
          >
            <Icon name="table-view" />
          </button>
        </div>
      </div>
      {view === ProductViewMode.GRID && (
        <LoaderContainer
          customLoader={<ProductsGridSkeleton />}
          isLoading={loading}
          loaderClassName="mt-2"
        >
          <div className="mt-2 grid grid-cols-4 gap-4">
            {data.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </LoaderContainer>
      )}

      {view === ProductViewMode.TABLE && (
        <LoaderContainer
          customLoader={<TableLoader columns={6} />}
          isLoading={loading}
          loaderClassName="mt-2"
        >
          <Table className="mt-2" columns={ordersColumns} data={data || []} />
        </LoaderContainer>
      )}

      <ProductDetailsDrawer
        isOpen={productDetailsDrawer.value}
        product={data[0]}
        onClose={productDetailsDrawer.off}
      />
    </div>
  );
};
