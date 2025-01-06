import React from "react";
type PageProps = {
  params: { productId: string };
};

const page = ({ params }: PageProps) => {
  const { productId } = params;
  console.log(productId);
  return <div>page</div>;
};

export default page;
