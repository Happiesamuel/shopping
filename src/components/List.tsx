import { getShoes } from "@/lib/action";
import { products } from "@wix/stores";
import Image from "next/image";
import React from "react";
import DOMPurify from "isomorphic-dompurify";

export default async function List() {
  const data = await getShoes(20, process.env.MEN_SHOES_CATEGORY_ID!);
  console.log(data, "sam");
  return (
    <div>
      {data.items.map((x: products.Product) => (
        <div key={x._id}>
          <h1>{x.name}</h1>
          <Image
            quality={50}
            src={x.media?.mainMedia?.image?.url || "/jolt.png"}
            // src="/jolt.png"
            width={200}
            height={200}
            alt="img"
          />
          <div className="relative aspect-square h-[200px] w-[200px]">
            <Image
              placeholder="blur"
              blurDataURL={x.media?.mainMedia?.image?.url || "/jolt.png"}
              fill
              className=" w-full"
              alt="img"
              src={x.media?.mainMedia?.image?.url || "/jolt.png"}
            />
          </div>
          <Image
            quality={50}
            src={x.media?.items?.at(1)?.image?.url || "/jolt.png"}
            width={200}
            height={200}
            alt="img"
          />
          <p>{x.price?.price}</p>
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
        </div>
      ))}
    </div>
  );
}
