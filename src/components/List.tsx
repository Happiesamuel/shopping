import { products } from "@wix/stores";
import Image from "next/image";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import { getSingleCategory } from "@/lib/action";

export default async function List({ id }: { id: string }) {
  const data = await getSingleCategory(50, id);
  return (
    <div>
      {data.items.map((x: products.Product) => (
        <Link href={`/product/${x._id}`} key={x._id}>
          <h1>{x.name}</h1>
          <Image
            quality={50}
            src={x.media?.mainMedia?.image?.url || "/jolt.png"}
            // src="/jolt.png"
            width={200}
            height={200}
            alt="img"
          />

          {/* <Image
            // quality={50}
            src={x.media?.items?.at(1)?.image?.url || "/jolt.png"}
            width={200}
            height={200}
            alt="img"
          /> */}
          <p>{x?.price?.price}</p>
          <div
            className=""
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                x.additionalInfoSections!.find(
                  (section) => section.title === "shortDesc"
                )?.description || ""
              ),
            }}
          ></div>
        </Link>
      ))}
    </div>
  );
}
