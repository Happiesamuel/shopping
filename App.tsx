"use client";
import React, { ReactElement } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { WixClientProvider } from "@/context/WixContext";
export default function App({ children }: { children: ReactElement }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10,
      },
    },
  });
  return (
    // <WixClientProvider>
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    // </WixClientProvider>
  );
}
