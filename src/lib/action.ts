"use server";

import { wixClientServer } from "./wixClientServer";

export async function getProducts() {
  const res = await wixClientServer();
  const data = await res.products.queryProducts().find();
  return data;
}

export async function getShoes(limit = 20, id: string) {
  const res = await wixClientServer();
  const data = await res.products
    .queryProducts()
    .eq("collectionIds", id)
    .limit(limit)
    .find();
  return data;
}
