import Link from "next/link";
import React from "react";
import { BsTelephone } from "react-icons/bs";

import { getCategoriesList, getProductsCategoriesList } from "@/lib/data";
import HeaderNav from "./HeaderNav";

export default async function Header() {
  const [{ products }, data] = await Promise.all([
    getProductsCategoriesList(),
    getCategoriesList(),
  ]);
  return (
    <header className="z-50 text-dark w-full fixed bg-white">
      <div className="bg-dark text-zinc-200 flex justify-between text-xs px-20 py-2">
        <div className="flex gap-1 items-center font-[400]">
          <BsTelephone />
          <p>+234 90 654 6113</p>
        </div>
        <div className="flex gap-4 items-center">
          <p>Get 50% Off on Selected Items</p> <p>|</p>{" "}
          <Link href="#" className="underline">
            Shop Now
          </Link>
        </div>
        <p>Location</p>
      </div>
      <HeaderNav products={products} data={data} />
    </header>
  );
}
