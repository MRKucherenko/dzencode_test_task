"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { useGetOrderByIdQuery } from "@/store/api/ordersApi";

type OrderDetailPanelProps = {
  orderId: number | null;
};

export const OrderDetailPanel = ({ orderId }: OrderDetailPanelProps) => {
  const { data: order } = useGetOrderByIdQuery(orderId ?? 0, {
    skip: orderId === null,
  });
  const { t } = useLanguage();

  if (orderId === null) {
    return <>{t.orders.selectFromList}</>;
  }

  return (
    <>
      <h2>{order?.title}</h2>

      {order?.Products?.map((product) => (
        <div key={product.id}>
          <img src={product.photo} alt="Photo" />
          <p>{product.title}</p>
          <p>{t.products.serialNumber}{product.serialNumber}</p>
          <p>{t.orders.price} {product.priceUAH} ₴</p>
          <p>{t.orders.price} {product.priceUSD} $</p>
        </div>
      ))}
    </>
  );
};
