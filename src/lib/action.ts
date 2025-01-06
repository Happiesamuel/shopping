"use server";

import { wixClientServer } from "./wixClientServer";

export async function getProducts() {
  const res = await wixClientServer();
  const data = await res.products.queryProducts().find();
  return data;
}
export async function getProduct(id: string) {
  try {
    const res = await wixClientServer();
    const data = await res.products.queryProducts().eq("_id", id).find();
    return data;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
}
export async function getCategories() {
  const res = await wixClientServer();
  const data = await res.collections.queryCollections().find();
  return data;
}

export async function getSingleCategory(limit = 20, id: string) {
  const res = await wixClientServer();
  const data = await res.products
    .queryProducts()
    .eq("collectionIds", id)
    .limit(limit)
    .find();
  return data;
}

//collections.getCollectionsBySlug(search) to search category
