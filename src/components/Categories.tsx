import { getCategories } from "@/lib/action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Categories() {
  const data = await getCategories();
  const cat = data.items;
  return (
    <div>
      <h1>Categories</h1>
      <div className="flex gap-3">
        {cat.map((x) => (
          <Link
            href={`/categories/${x._id}`}
            key={x._id}
            className="flex flex-col gap-2"
          >
            <h1>{x.name}</h1>
            <Image
              //   quality={50}
              src={x.media?.mainMedia?.image?.url || "/jolt.png"}
              width={200}
              height={200}
              alt="img"
            />

            <p>{x.numberOfProducts} products</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
