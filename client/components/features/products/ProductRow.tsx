"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { ConfirmDeleteProduct } from "./ConfirmDeleteProduct";

type ProductRowProps = {
  product: Product;
};

export const ProductRow = ({ product }: ProductRowProps) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const guaranteeStart = new Date(product.guaranteeStart);
  const guaranteeEnd = new Date(product.guaranteeEnd);

  return (
    <div>
      <div>
        <p>{product.title}</p>
        <p>{product.type}</p>
        <p>
          с {guaranteeStart.toLocaleDateString("ru-RU")} по{" "}
          {guaranteeEnd.toLocaleDateString("ru-RU")}
        </p>
        <p>{product.priceUSD} $</p>
        <p>{product.priceUAH} ₴</p>
        <p>{product.Order?.title}</p>
      </div>

      <button onClick={() => setIsDeleteOpen(true)}>Удалить</button>

      {isDeleteOpen && (
        <ConfirmDeleteProduct
          productId={product.id}
          productTitle={product.title}
          onClose={() => setIsDeleteOpen(false)}
        />
      )}
    </div>
  );
};
