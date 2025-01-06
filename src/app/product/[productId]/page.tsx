import ProductDescription from "@/components/product/ProductDescription";
import ProductImages from "@/components/product/ProductImages";
import { getProduct } from "@/lib/action";
import React from "react";

export type paramsType = Promise<{ productId: string }>;
const page = async ({ params }: { params: paramsType }) => {
  const { productId } = await params;
  const data = await getProduct(productId);
  const product = data?.items?.at(0) as Product;

  return (
    <div className="pt-64">
      <div className="flex flex-col md:flex-row gap-3">
        <ProductImages product={product} />
        <ProductDescription product={product} />
      </div>
    </div>
  );
};

export default page;
