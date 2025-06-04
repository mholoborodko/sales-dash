export type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  createdAt: string;
  status: ProductStatus;
};

export enum ProductViewMode {
  GRID = 'GRID',
  TABLE = 'TABLE',
}

export enum ProductStatus {
  IN_STOCK = 'IN_STOCK',
  OUT_OF_STOCK = 'OUT_OF_STOCK',
  ARCHIVED = 'ARCHIVED',
}
