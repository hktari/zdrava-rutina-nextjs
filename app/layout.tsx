import "../styles/main.scss";

import React from "react";
import { ThemeProvider } from "../components/theme-provider";
import { Raleway, Open_Sans, Amatic_SC } from "next/font/google";
import { cn } from "../lib/utils";
import { Metadata } from "next";
import client from "../tina/__generated__/client";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
});

const amaticSC = Amatic_SC({
  subsets: ["latin"],
  variable: "--font-amatic-sc",
  weight: ["400", "700"],
});

const fonts = [raleway, openSans, amaticSC];

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalQuery = await client.queries.global({
    relativePath: "index.json",
  });
  const global = globalQuery.data.global;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(fonts.map((font) => font.variable))}>{children}</body>
    </html>
  );
}
