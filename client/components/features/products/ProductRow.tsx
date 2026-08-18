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

  const guaranteeOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return (
    <div className="product-row">
      <p>{product.title}</p>
      <p>{product.type}</p>
      <p>
        {t.products.from} {guaranteeStart.toLocaleDateString("ru-RU")}{" "}
        {t.products.to} {guaranteeEnd.toLocaleDateString("ru-RU")}
        <br />
        {t.products.from}{" "}
        {guaranteeStart.toLocaleDateString("ru-RU", guaranteeOptions)}{" "}
        {t.products.to}{" "}
        {guaranteeEnd.toLocaleDateString("ru-RU", guaranteeOptions)}
      </p>
      <p>{product.priceUSD} $</p>
      <p>{product.priceUAH} ₴</p>
      <p>{product.Order?.title}</p>

      <button
        className="product-row__delete"
        onClick={() => setIsDeleteOpen(true)}
      >
        🗑️
      </button>

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
