import React from "react";

const page = ({ params }: { params: { productId: string } }) => {
  const id = params.productId;
  console.log(id);
  return <div>page</div>;
};

export default page;
