"use client";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import {
  productSchema,
  type ProductFormValues,
} from "@/lib/validators/productSchema";
import { useCreateProductMutation } from "@/store/api/productsApi";
import { useGetOrdersQuery } from "@/store/api/ordersApi";
import { Modal } from "@/components/ui/Modal/Modal";
import { useLanguage } from "@/i18n/LanguageContext";

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
  const { data: orders } = useGetOrdersQuery();
  const { t } = useLanguage();

  const onSubmit = async (data: ProductFormValues) => {
    await createProduct(data);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <form className="product-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="product-form__input"
          {...register("title")}
          placeholder={t.form.titlePlaceholder}
        />
        {errors.title && (
          <p className="product-form__error">{errors.title.message}</p>
        )}

        <select
          {...register("orderId", { valueAsNumber: true })}
          className="product-form__input"
        >
          <option value="">{t.orders.selectFromList}</option>
          {orders?.map((order) => (
            <option key={order.id} value={order.id}>
              {order.title}
            </option>
          ))}
        </select>
        {errors.orderId && (
          <p className="product-form__error">{errors.orderId.message}</p>
        )}

        <select {...register("type")} className="product-form__input">
          <option value="">{t.products.allTypes}</option>
          <option value="Monitors">{t.types.Monitors}</option>
          <option value="Laptops">{t.types.Laptops}</option>
          <option value="Keyboards">{t.types.Keyboards}</option>
        </select>
        {errors.type && (
          <p className="product-form__error">{errors.type.message}</p>
        )}

        <input
          className="product-form__input"
          {...register("specification")}
          placeholder={t.form.specificationPlaceholder}
        />
        {errors.specification && (
          <p className="product-form__error">{errors.specification.message}</p>
        )}

        <input
          className="product-form__input"
          {...register("serialNumber", { valueAsNumber: true })}
          type="number"
          placeholder={t.form.serialNumberPlaceholder}
        />
        {errors.serialNumber && (
          <p className="product-form__error">{errors.serialNumber.message}</p>
        )}

        <input
          className="product-form__input"
          {...register("priceUSD", { valueAsNumber: true })}
          type="number"
          placeholder={t.form.priceUSDPlaceholder}
        />
        {errors.priceUSD && (
          <p className="product-form__error">{errors.priceUSD.message}</p>
        )}

        <input
          className="product-form__input"
          {...register("priceUAH", { valueAsNumber: true })}
          type="number"
          placeholder={t.form.priceUAHPlaceholder}
        />
        {errors.priceUAH && (
          <p className="product-form__error">{errors.priceUAH.message}</p>
        )}

        <button
          className="product-form__submit"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? t.common.adding : t.common.add}
        </button>
      </form>
    </Modal>
  );
};
