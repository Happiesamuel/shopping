import { Suspense } from "react";
import List from "@/components/List";
import Categories from "@/components/Categories";
export const dynamic = "force-dynamic";
export default async function page() {
  return (
    <div className="pt-24">
      <h1>Data fetching</h1>
      <Suspense fallback={<p>loading...</p>}>
        <Categories />
      </Suspense>
    </div>
  );
}
