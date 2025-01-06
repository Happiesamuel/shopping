import React from "react";

export type paramsType = Promise<{ productId: string }>;
const page = async ({ params }: { params: paramsType }) => {
  const { productId } = await params;
  console.log(productId);
  return <div>page</div>;
};

export default page;
