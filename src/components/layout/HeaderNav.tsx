"use client";
import React, { useState } from "react";
import { header } from "@/lib/constants";
import Image from "next/image";
import { BiUser } from "react-icons/bi";
import HeaderCategory from "./HeaderCategory";
import HeaderInput from "./HeaderInput";
import Link from "next/link";
import { BsCart3 } from "react-icons/bs";
export default function HeaderNav({
  products,
  data,
}: {
  products: ProductCategory[];
  data: string[];
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className=" flex justify-between items-center px-20 text-lg py-3">
      <Image src="/jolt.png" width={60} height={60} alt="logo" />
      <HeaderCategory products={products} data={data} />
      <div className="flex items-center gap-8">
        {!isFocused
          ? header.map((link) => {
              return (
                <Link href={link.routes} key={link.id}>
                  {link.title}
                </Link>
              );
            })
          : ""}
      </div>

      <HeaderInput isFocused={isFocused} setIsFocused={setIsFocused} />

      <div className="flex items-center gap-8">
        <Link href="/" className="flex items-center gap-1">
          <BiUser />
          <p>Account</p>
        </Link>
        <Link href="/" className="flex items-center gap-1">
          <BsCart3 />
          <p>Cart</p>
        </Link>
      </div>
    </div>
  );
}
