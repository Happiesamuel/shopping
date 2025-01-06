import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { error } from "console";
import { cookies } from "next/headers";

export const wixClientServer = async () => {
  let refreshToken;

  try {
    // Use await to resolve cookies() since it now returns a Promise
    const cookieStore = await cookies();
    const cookieValue = cookieStore.get("refreshToken")?.value || "{}";

    // Parse the refreshToken value
    refreshToken = JSON.parse(cookieValue);
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
