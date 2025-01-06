import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";

export const wixClientServer = async () => {
  let refreshToken;

  try {
    const cookieStore = await cookies();
    const cookieValue = cookieStore.get("refreshToken")?.value || "{}";
    refreshToken = JSON.parse(cookieValue);
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }

  const wixClient = createClient({
    modules: {
      products,
      collections,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: { value: "", expiresAt: 0 },
      },
    }),
  });
  return wixClient;
};
