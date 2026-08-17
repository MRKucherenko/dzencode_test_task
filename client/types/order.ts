import type { Product } from './product';

export type Order = {
  id: number;
  title: string;
  date: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  Products: Product[];
  productsCount?: number;
  totalPriceUSD?: number;
  totalPriceUAH?: number;
};
