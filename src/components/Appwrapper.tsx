"use client";

import App from "@/../App"; // Adjust the import path
import React from "react";
import Header from "./layout/Header";
import { WixClientProvider } from "@/context/WixContext";
export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WixClientProvider>
      <App>
        <>
          <Header />
          {children}
        </>
      </App>
    </WixClientProvider>
  );
}
