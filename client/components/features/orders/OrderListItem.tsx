"use client";

import { useState } from "react";
import type { Order } from "@/types/order";
import { useLanguage } from "@/i18n/LanguageContext";
import dynamic from "next/dynamic";

const ConfirmDeleteOrder = dynamic(() =>
  import("./ConfirmDeleteOrder").then((mod) => mod.ConfirmDeleteOrder),
);

type OrderListItemProps = {
  order: Order;
  onClick: () => void;
};

export const OrderListItem = ({ order, onClick }: OrderListItemProps) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { t } = useLanguage();
  const date = new Date(order.date);

  return (
    <div>
      <div onClick={onClick}>
        <p>{order.title}</p>
        <p>
          {order.productsCount} {t.orders.productsCount}
        </p>
        <p>{date.toLocaleDateString("ru-RU")}</p>
        <p>{order.totalPriceUSD} $</p>
        <p>{order.totalPriceUAH} ₴</p>
        <p>{order.description}</p>
      </div>

      <button onClick={() => setIsDeleteOpen(true)}>{t.common.delete}</button>

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
