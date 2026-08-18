"use client";

import { useState } from "react";
import { useGetProductsQuery } from "@/store/api/productsApi";
import { ProductRow } from "./ProductRow";
import { useLanguage } from "@/i18n/LanguageContext";
import dynamic from "next/dynamic";

const AddProductForm = dynamic(() =>
  import("./AddProductForm").then((mod) => mod.AddProductForm),
);

export const ProductTable = () => {
  const [type, setType] = useState("");
  const [specification, setSpecification] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { t } = useLanguage();

  const {
    data: products,
    isLoading,
    error,
  } = useGetProductsQuery({ type, specification });

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };

  const handleSpecificationChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setSpecification(event.target.value);
  };

  const handleAddProduct = () => {
    setIsFormOpen(true);
  };

  if (isLoading) return <>{t.common.loading}</>;
  if (error) return <>{t.common.loadError}</>;

  return (
    <div className="products">
      <div className="products__header">
        <div className="products__filters">
          <select
            className="products__filter"
            value={type}
            onChange={handleTypeChange}
          >
            <option value="">{t.products.allTypes}</option>
            <option value="Monitors">{t.types.Monitors}</option>
            <option value="Laptops">{t.types.Laptops}</option>
            <option value="Keyboards">{t.types.Keyboards}</option>
          </select>

          <select
            className="products__filter"
            value={specification}
            onChange={handleSpecificationChange}
          >
            <option value="">{t.products.allSpecifications}</option>
            <option value="Specification 1">
              {t.specifications.Specification1}
            </option>
            <option value="Specification 2">
              {t.specifications.Specification2}
            </option>
            <option value="Specification 3">
              {t.specifications.Specification3}
            </option>
          </select>
        </div>

        <button
          className="products__add-button"
          type="button"
          onClick={handleAddProduct}
        >
          {t.products.addProduct}
        </button>
      </div>

      {isFormOpen && <AddProductForm onClose={() => setIsFormOpen(false)} />}

      <div className="products__list">
        {products?.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
