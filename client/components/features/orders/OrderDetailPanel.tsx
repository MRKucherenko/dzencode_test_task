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
    return (
      <div className="order-detail">
        <p className="order-detail__placeholder">{t.orders.selectFromList}</p>
      </div>
    );
  }

  return (
    <div className="order-detail">
      <h2 className="order-detail__title">{order?.title}</h2>

      {order?.Products?.map((product) => (
        <div key={product.id} className="order-detail__product">
          <img
            className="order-detail__product-photo"
            src={product.photo}
            alt="Photo"
          />
          <div className="order-detail__product-info">
            <p className="order-detail__product-title">{product.title}</p>
            <p>
              {t.products.serialNumber}
              {product.serialNumber}
            </p>
            <p>
              {t.orders.price} {product.priceUAH} ₴
            </p>
            <p>
              {t.orders.price} {product.priceUSD} $
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
