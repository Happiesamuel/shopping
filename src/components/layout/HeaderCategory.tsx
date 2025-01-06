"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import Image from "next/image";

export default function HeaderCategory({
  products,
  data,
}: {
  products: ProductCategory[];
  data: string[];
}) {
  const categories = data
    .map((x) => products.filter((y) => y.category === x))
    .map((x) => {
      return {
        category: x?.at(0)?.category,
        thumbnail: x?.at(0)?.thumbnail,
        results: x.length,
      };
    })
    .filter((x) => x.results > 5);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-lg text-dark">
            Category
          </NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-lg  bg-white px-8 py-6">
            <h1 className="border-b border-zinc-300 pb-3 text-xl text-dark font-semibold">
              Popular Categories
            </h1>
            <ul className="grid w-[400px] gap-5 pt-5  md:w-[500px] md:grid-cols-2 lg:w-[800px] ">
              {categories.map((cat) => (
                <NavigationMenuLink asChild key={cat.category}>
                  <div className="cursor-pointer bg-zinc-200/45 flex gap-2 items-center p-2 rounded-[8px]">
                    <Image
                      src={cat.thumbnail || ""}
                      className="bg-white rounded-[6px] py-2 px-1"
                      width={60}
                      height={60}
                      alt={cat.category || ""}
                    />
                    <div className="flex flex-col">
                      <h1 className="capitalize text-dark text-base">
                        {cat.category}
                      </h1>
                      <p className="text-sm text-zinc-400">
                        {cat.results} Items Available
                      </p>
                    </div>
                  </div>
                </NavigationMenuLink>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
