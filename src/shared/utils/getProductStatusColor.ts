import { ProductStatus } from '@/entities/Product';
import { BadgeVariant } from '@/shared/ui/Badge';

export function getProductStatusColor(status: ProductStatus): BadgeVariant {
  const productStatusColorMap: Record<ProductStatus, BadgeVariant> = {
    [ProductStatus.ARCHIVED]: BadgeVariant.GRAY,
    [ProductStatus.IN_STOCK]: BadgeVariant.BLUE,
    [ProductStatus.OUT_OF_STOCK]: BadgeVariant.RED,
  };

  return productStatusColorMap[status];
}
