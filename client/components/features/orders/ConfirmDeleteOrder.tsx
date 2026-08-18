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
      <p className="app-modal__text">
        {t.orders.confirmDelete} {orderTitle}?
      </p>
      <div className="app-modal__actions">
        <button className="app-modal__button--secondary" onClick={onClose}>
          {t.common.cancel}
        </button>
        <button
          className="app-modal__button--primary"
          onClick={handleDelete}
          disabled={isLoading}
        >
          {t.common.delete}
        </button>
      </div>
    </Modal>
  );
};
