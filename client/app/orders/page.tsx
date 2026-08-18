"use client";

import { OrderDetailPanel } from "@/components/features/orders/OrderDetailPanel";
import { OrdersList } from "@/components/features/orders/OrdersList";
import { useState } from "react";

export default function OrdersPage() {
  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);

  return (
    <div className="orders">
      <OrdersList onSelectOrder={setSelectedOrderId} />
      <OrderDetailPanel orderId={selectedOrderId} />
    </div>
  );
};
