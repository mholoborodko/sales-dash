export enum OrderStatus {
  PENDING = 'PENDING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export enum PaymentMethod {
  CREDIT_CARD = 'Credit Card',
  PAYPAL = 'PayPal',
  BANK_TRANSFER = 'Bank Transfer',
  CASH_ON_DELIVERY = 'Cash on Delivery',
  APPLE_PAY = 'Apple Pay',
  GOOGLE_PAY = 'Google Pay',
  BITCOIN = 'Bitcoin',
}

export interface Order {
  id: number;
  customer: {
    fullName: string;
    photo: string | null;
  };
  total: string;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  country: string;
  city: string;
  date: string;
}
