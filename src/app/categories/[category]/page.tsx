import List from "@/components/List";
import React, { Suspense } from "react";

type PageProps = {
  params: { category: string };
};

const page = ({ params }: PageProps) => {
  const { category } = params;
  return (
    <div>
      <h1>Category</h1>
      <Suspense fallback={<p>loading...</p>}>
        <List id={category} />
      </Suspense>
    </div>
  );
};

export default page;
