'use client'

import { useGetOrdersQuery } from "@/store/api/ordersApi";
import { OrderListItem } from "./OrderListItem";
import { useLanguage } from "@/i18n/LanguageContext";

type OrdersListProps = {
  onSelectOrder: (id: number) => void;
};

export const OrdersList = ({
  onSelectOrder,
}: OrdersListProps) => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();
  const { t } = useLanguage();

  if (isLoading) return <>{t.common.loading}</>;
  if (error) return <>{t.common.loadError}</>;

  return (
    <div className="orders__list">
      {orders?.map((order) => (
        <OrderListItem
          key={order.id}
          order={order}
          onClick={() => onSelectOrder(order.id)}
        />
      ))}
    </div>
  );
};