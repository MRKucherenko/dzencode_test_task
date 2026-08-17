'use client'

import { useGetOrdersQuery } from "@/store/api/ordersApi";
import { OrderListItem } from "./OrderListItem";

type OrdersListProps = {
  selectedOrderId: number | null;
  onSelectOrder: (id: number) => void;
};

export const OrdersList = ({
  selectedOrderId,
  onSelectOrder,
}: OrdersListProps) => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  if (isLoading) return <>Загрузка</>;
  if (error) return <>Ошибка загрузки</>;

  return (
    <>
      {orders?.map((order) => (
        <OrderListItem
          key={order.id}
          order={order}
          onClick={() => onSelectOrder(order.id)}
        />
      ))}
    </>
  );
};
