"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ProductImages({ product }: { product: Product }) {
  const images = [...product.media.items];
  const [src, setSrc] = useState(images?.at(-1)?.image?.url || "");
  return (
    <div className="flex gap-2 flex-col w-full md:w-[50%]">
      <div className="flex  gap-1">
        {images.map((x) => (
          <div
            key={x._id}
            onClick={() => setSrc(x.image.url)}
            className="relative aspect-auto w-full h-[70px] "
          >
            <Image
              // quality={5}
              src={x.image.url || ""}
              alt="img"
              fill
              className="object-cover rounded-lg"
            />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <div className="w-full h-[300px] relative aspect-square">
        <Image
          // quality={5}
          src={src}
          alt="big-img"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
