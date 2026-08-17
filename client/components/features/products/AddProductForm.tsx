"use client";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import {
  productSchema,
  type ProductFormValues,
} from "@/lib/validators/productSchema";
import { useCreateProductMutation } from "@/store/api/productsApi";
import { Modal } from "@/components/ui/Modal/Modal";

type AddProductFormProps = {
  onClose: () => void;
};

export const AddProductForm = ({ onClose }: AddProductFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: joiResolver(productSchema),
  });

  const [createProduct, { isLoading }] = useCreateProductMutation();

  const onSubmit = async (data: ProductFormValues) => {
    await createProduct(data);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("title")} placeholder="Название" />
        {errors.title && <p>{errors.title.message}</p>}

        <input
          {...register("orderId", { valueAsNumber: true })}
          type="number"
          placeholder="ID прихода"
        />
        {errors.orderId && <p>{errors.orderId.message}</p>}

        <input {...register("type")} placeholder="Тип" />
        {errors.type && <p>{errors.type.message}</p>}

        <input {...register("specification")} placeholder="Спецификация" />
        {errors.specification && <p>{errors.specification.message}</p>}

        <input
          {...register("serialNumber", { valueAsNumber: true })}
          type="number"
          placeholder="Серийный номер"
        />
        {errors.serialNumber && <p>{errors.serialNumber.message}</p>}

        <input
          {...register("priceUSD", { valueAsNumber: true })}
          type="number"
          placeholder="Цена в $"
        />
        {errors.priceUSD && <p>{errors.priceUSD.message}</p>}

        <input
          {...register("priceUAH", { valueAsNumber: true })}
          type="number"
          placeholder="Цена в ₴"
        />
        {errors.priceUAH && <p>{errors.priceUAH.message}</p>}

        <button type="submit" disabled={isLoading}>
          {isLoading ? "Добавление..." : "Добавить"}
        </button>
      </form>
    </Modal>
  );
};
