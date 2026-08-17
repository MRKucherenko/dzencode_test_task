"use client";

import { useState } from "react";
import type { Order } from "@/types/order";
import { ConfirmDeleteOrder } from "./ConfirmDeleteOrder";

type OrderListItemProps = {
  order: Order;
  onClick: () => void;
};

export const OrderListItem = ({ order, onClick }: OrderListItemProps) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const date = new Date(order.date);

  return (
    <div>
      <div onClick={onClick}>
        <p>{order.title}</p>
        <p>{order.productsCount} Продукта</p>
        <p>{date.toLocaleDateString("ru-RU")}</p>
        <p>{order.totalPriceUSD} $</p>
        <p>{order.totalPriceUAH} ₴</p>
        <p>{order.description}</p>
      </div>

      <button onClick={() => setIsDeleteOpen(true)}>Удалить</button>

      {isDeleteOpen && (
        <ConfirmDeleteOrder
          orderId={order.id}
          orderTitle={order.title}
          onClose={() => setIsDeleteOpen(false)}
        />
      )}
    </div>
  );
};
