import { OrderStatus } from '@/entities/Order';
import { BadgeVariant } from '@/shared/ui/Badge';

export function getOrderStatusColor(status: OrderStatus): BadgeVariant {
  const orderStatusColorMap: Record<OrderStatus, BadgeVariant> = {
    [OrderStatus.PENDING]: BadgeVariant.ORANGE,
    [OrderStatus.SHIPPED]: BadgeVariant.BLUE,
    [OrderStatus.DELIVERED]: BadgeVariant.GREEN,
    [OrderStatus.CANCELLED]: BadgeVariant.RED,
  };

  return orderStatusColorMap[status];
}
