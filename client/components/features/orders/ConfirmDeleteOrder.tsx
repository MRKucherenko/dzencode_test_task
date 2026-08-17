"use client";

import { useDeleteOrderMutation } from "@/store/api/ordersApi";
import { Modal } from "@/components/ui/Modal/Modal";
import { useLanguage } from "@/i18n/LanguageContext";

type ConfirmDeleteOrderProps = {
  orderId: number;
  orderTitle: string;
  onClose: () => void;
};

export const ConfirmDeleteOrder = ({
  orderId,
  orderTitle,
  onClose,
}: ConfirmDeleteOrderProps) => {
  const [deleteOrder, { isLoading }] = useDeleteOrderMutation();
  const { t } = useLanguage();

  const handleDelete = async () => {
    await deleteOrder(orderId);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <p>{t.orders.confirmDelete} {orderTitle}?</p>
      <button onClick={onClose}>{t.common.cancel}</button>
      <button onClick={handleDelete} disabled={isLoading}>
        {t.common.delete}
      </button>
    </Modal>
  );
};
