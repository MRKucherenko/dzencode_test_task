"use client";

import { useGetOrderByIdQuery } from "@/store/api/ordersApi";

type OrderDetailPanelProps = {
  orderId: number | null;
};

export const OrderDetailPanel = ({ orderId }: OrderDetailPanelProps) => {
  const { data: order } = useGetOrderByIdQuery(orderId ?? 0, {
    skip: orderId === null,
  });

  if (orderId === null) {
    return <> Выберите позицию из списка слева </>;
  }

  return (
    <>
      <h2>{order?.title}</h2>

      {order?.Products?.map((product) => (
        <div key={product.id}>
          <img src={product.photo} alt="Photo" />
          <p>{product.title}</p>
          <p>SN-{product.serialNumber}</p>
          <p>Цена: {product.priceUAH} ₴</p>
          <p>Цена: {product.priceUSD} $</p>
        </div>
      ))}
    </>
  );
};
