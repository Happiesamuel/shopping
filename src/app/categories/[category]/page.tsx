import List from "@/components/List";
import React, { Suspense } from "react";

const page = ({ params }: { params: { category: string } }) => {
  const id = params.category;
  return (
    <div>
      <h1>Category</h1>
      <Suspense fallback={<p>loading...</p>}>
        <List id={id} />
      </Suspense>
    </div>
  );
};

export default page;
