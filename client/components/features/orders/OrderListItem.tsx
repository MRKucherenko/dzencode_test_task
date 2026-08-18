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
  const shortDate = date.toLocaleDateString("ru-RU");
  const longDate = date.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="order-card">
      <div className="order-card__body" onClick={onClick}>
        <p className="order-card__title">{order.title}</p>
        <p className="order-card__meta">
          {order.productsCount} {t.orders.productsCount}
        </p>
        <p className="order-card__meta">{shortDate}</p>
        <p className="order-card__meta">{longDate}</p>
        <p className="order-card__price">
          {t.orders.sum}: {order.totalPriceUSD} $
        </p>
        <p className="order-card__price">
          {t.orders.sum}: {order.totalPriceUAH} ₴
        </p>
        <p className="order-card__description">{order.description}</p>
      </div>

      <button
        className="order-card__delete"
        onClick={() => setIsDeleteOpen(true)}
      >
        🗑️
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
