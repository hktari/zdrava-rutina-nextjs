import React, { PropsWithChildren } from "react";
import { LayoutProvider } from "./layout-context";
import client from "../../tina/__generated__/client";
import Header from "../nav/header";
import Footer from "../nav/footer";

type LayoutProps = PropsWithChildren & {
  title?: string;
  isHomePage?: boolean;
  rawPageData?: any;
};

export default async function Layout({
  children,
  title,
  isHomePage = false,
  rawPageData,
}: LayoutProps) {
  const { data: globalData } = await client.queries.global({
    relativePath: "index.json",
  });

  title = title || globalData?.global.seo?.siteName || "";
  const nav = globalData?.global?.header?.nav || [];

  return (
    <LayoutProvider globalSettings={globalData.global} pageData={rawPageData}>
  
      <div className="layout-container">
        <Header nav={nav} title={title} isHomePage={isHomePage} />
        <main className={""}>{children}</main>
        <Footer />
      </div>
    </LayoutProvider>
  );
}
