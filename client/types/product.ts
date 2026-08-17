export type Product = {
  id: number;
  serialNumber: number;
  isNew: boolean;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guaranteeStart: string;
  guaranteeEnd: string;
  priceUSD: string;
  priceUAH: string;
  orderId: number;
  date: string;
  createdAt?: string;
  updatedAt?: string;
  Order?: {
    id: number;
    title: string;
  };
};
