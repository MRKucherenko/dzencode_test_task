"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import { useLanguage } from "@/i18n/LanguageContext";
import dynamic from "next/dynamic";

const ConfirmDeleteProduct = dynamic(() =>
  import("./ConfirmDeleteProduct").then((mod) => mod.ConfirmDeleteProduct),
);

type ProductRowProps = {
  product: Product;
};

export const ProductRow = ({ product }: ProductRowProps) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { t } = useLanguage();
  const guaranteeStart = new Date(product.guaranteeStart);
  const guaranteeEnd = new Date(product.guaranteeEnd);

  return (
    <div>
      <div>
        <p>{product.title}</p>
        <p>{product.type}</p>
        <p>
          {t.products.from} {guaranteeStart.toLocaleDateString("ru-RU")}{" "}
          {t.products.to} {guaranteeEnd.toLocaleDateString("ru-RU")}
        </p>
        <p>{product.priceUSD} $</p>
        <p>{product.priceUAH} ₴</p>
        <p>{product.Order?.title}</p>
      </div>

      <button onClick={() => setIsDeleteOpen(true)}>{t.common.delete}</button>

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
