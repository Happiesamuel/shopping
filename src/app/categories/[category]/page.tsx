import List from "@/components/List";
import React, { Suspense } from "react";

// export const generateStaticParams = () => {
//     return photos.map(({ id }) => ({
//       id: String(id),
//     }));
//   };
export type paramsType = Promise<{ category: string }>;

const page = async ({ params }: { params: paramsType }) => {
  const { category } = await params;
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
