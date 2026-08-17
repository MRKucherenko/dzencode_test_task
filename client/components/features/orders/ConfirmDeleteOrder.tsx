"use client";

import { useDeleteOrderMutation } from "@/store/api/ordersApi";
import { Modal } from "@/components/ui/Modal/Modal";

type ConfirmDeleteOrderPopupProps = {
  orderId: number;
  orderTitle: string;
  onClose: () => void;
};

export const ConfirmDeleteOrder = ({
  orderId,
  orderTitle,
  onClose,
}: ConfirmDeleteOrderPopupProps) => {
  const [deleteOrder, { isLoading }] = useDeleteOrderMutation();

  const handleDelete = async () => {
    await deleteOrder(orderId);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <p>Вы уверены, что хотите удалить {orderTitle};?</p>
      <button onClick={onClose}>Отменить</button>
      <button onClick={handleDelete} disabled={isLoading}>
        Удалить
      </button>
    </Modal>
  );
};
