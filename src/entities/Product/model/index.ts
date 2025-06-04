export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  createdAt: string;
};

export enum ProductViewMode {
  GRID = 'GRID',
  TABLE = 'TABLE',
}
