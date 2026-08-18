"use client";

import { Modal } from "@/components/ui/Modal/Modal";
import { useLanguage } from "@/i18n/LanguageContext";
import { useDeleteProductMutation } from "@/store/api/productsApi";

type ConfirmDeleteProductProps = {
  productId: number;
  productTitle: string;
  onClose: () => void;
};

export const ConfirmDeleteProduct = ({
  productId,
  productTitle,
  onClose,
}: ConfirmDeleteProductProps) => {
  const [deleteProduct, { isLoading }] = useDeleteProductMutation();
  const { t } = useLanguage();

  const handleDelete = async () => {
    await deleteProduct(productId);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <p className="app-modal__text">
        {t.products.confirmDelete} {productTitle}?
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
