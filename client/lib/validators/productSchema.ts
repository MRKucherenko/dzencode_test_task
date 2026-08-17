import Joi from 'joi';

export const productSchema = Joi.object({
  title: Joi.string().min(1).required(),
  orderId: Joi.number().positive().required(),
  type: Joi.string().optional(),
  specification: Joi.string().optional(),
  serialNumber: Joi.number().optional(),
  priceUSD: Joi.number().optional(),
  priceUAH: Joi.number().optional(),
});

export type ProductFormValues = {
  title: string;
  orderId: number;
  type?: string;
  specification?: string;
  serialNumber?: number;
  priceUSD?: number;
  priceUAH?: number;
};
