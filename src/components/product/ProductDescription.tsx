import React from "react";

export default function ProductDescription({ product }: { product: Product }) {
  return (
    <div className="w-full md:w-[50%]">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
