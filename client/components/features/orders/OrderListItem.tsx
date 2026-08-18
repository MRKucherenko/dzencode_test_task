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
    <div className="order-card">
      <div className="order-card__body" onClick={onClick}>
        <p className="order-card__title">{order.title}</p>
        <p className="order-card__meta">
          {order.productsCount} {t.orders.productsCount}
        </p>
        <p className="order-card__meta">{date.toLocaleDateString("ru-RU")}</p>
        <p className="order-card__price">{order.totalPriceUSD} $</p>
        <p className="order-card__price">{order.totalPriceUAH} ₴</p>
        <p className="order-card__description">{order.description}</p>
      </div>

      <button
        className="order-card__delete"
        onClick={() => setIsDeleteOpen(true)}
      >
        {t.common.delete}
      </button>

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
