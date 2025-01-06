import { Suspense } from "react";
import List from "@/components/List";
export const dynamic = "force-dynamic";
export default async function page() {
  return (
    <div className="pt-16">
      <h1>Data fetching</h1>
      <Suspense fallback={<p>loading...</p>}>
        <List />
      </Suspense>
    </div>
  );
}
