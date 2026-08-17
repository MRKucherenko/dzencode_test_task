"use client";

import { Modal } from "@/components/ui/Modal/Modal";
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

  const handleDelete = async () => {
    await deleteProduct(productId);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <p>Вы уверены, что хотите удалить {productTitle};?</p>
      <button onClick={onClose}>Отменить</button>
      <button onClick={handleDelete} disabled={isLoading}>
        Удалить
      </button>
    </Modal>
  );
};
