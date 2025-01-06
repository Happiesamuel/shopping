import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { error } from "console";
import { cookies } from "next/headers";

export const wixClientServer = async () => {
  let refreshToken;
  try {
    const cookieStore = await cookies();
    refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
  } catch (e) {
    throw error(e);
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