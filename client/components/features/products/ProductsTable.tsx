"use client";

import { useState } from "react";
import { useGetProductsQuery } from "@/store/api/productsApi";
import { ProductRow } from "./ProductRow";

export const ProductTable = () => {
  const [type, setType] = useState("");
  const [specification, setSpecification] = useState("");

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

  if (isLoading) return <>Загрузка</>;
  if (error) return <>Ошибка загрузки</>;

  return (
    <>
      <select value={type} onChange={handleTypeChange}>
        <option value="">Все типы</option>
        <option value="Monitors">Monitors</option>
        <option value="Laptops">Laptops</option>
        <option value="Keyboards">Keyboards</option>
      </select>

      <select value={specification} onChange={handleSpecificationChange}>
        <option value="">Все спецификации</option>
        <option value="Specification 1">Specification 1</option>
        <option value="Specification 2">Specification 2</option>
        <option value="Specification 3">Specification 3</option>
      </select>

      {products?.map((product) => (
        <ProductRow key={product.id} product={product} />
      ))}
    </>
  );
};
