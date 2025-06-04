import { faker } from '@faker-js/faker';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import {
  ProductCard,
  ProductsGridSkeleton,
  ProductViewMode,
} from '@/entities/Product';
import { Icon, LoaderContainer } from '@/shared/ui';

export const data = Array.from({ length: 20 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  description: faker.commerce.productDescription(),
  image: `https://picsum.photos/seed/${Math.floor(
    Math.random() * 10000
  )}/600/400`,
  price: parseFloat(faker.commerce.price({ min: 10, max: 1000 })),
  category: faker.commerce.department(),
  createdAt: faker.date.past({ years: 1 }).toISOString(),
}));

export const ProductsPage = () => {
  const [view, setView] = useState<ProductViewMode>(ProductViewMode.GRID);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, [loading]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center  justify-between">
        <h2 className="text-lg font-semibold">Products</h2>
        <div className="flex items-center rounded-md border bg-white shadow-sm">
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
        >
          <div className="grid grid-cols-4 gap-4">
            {data.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </LoaderContainer>
      )}
    </div>
  );
};
