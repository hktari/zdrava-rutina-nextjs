import React, { PropsWithChildren } from "react";
import { LayoutProvider } from "./layout-context";
import client from "../../tina/__generated__/client";
import Header from "../nav/header";
import Footer from "../nav/footer";
import { PageQuery, PostQuery } from "../../tina/__generated__/types";

type LayoutProps = PropsWithChildren & {
  rawPageData?: {
    query: string;
    variables: object;
    data: PageQuery | PostQuery;
  };
};

export default async function Layout({ children, rawPageData }: LayoutProps) {
  const { data: globalData } = await client.queries.global({
    relativePath: "index.json",
  });

  let title = globalData?.global.seo?.siteName || "";
  let isHomePage = false;

  const pageData = (rawPageData?.data as PageQuery).page;
  const postData = (rawPageData?.data as PostQuery).post;

  if (pageData) {
    title = pageData.seo.title;
    isHomePage =
      pageData.blocks?.find((b) => b?.__typename === "PageBlocksBanner")
        ?.fullScreen ?? false;
  } else if (postData) {
    title = postData.title;
  }

  const nav = globalData?.global?.header?.nav || [];

  return (
    // TODO: can rawPageData ever be undefined?
    // @ts-ignore
    <LayoutProvider globalSettings={globalData.global} pageData={rawPageData}>
      <Header nav={nav} title={title} isHomePage={isHomePage} />
      <main className={""}>{children}</main>
      <Footer />
    </LayoutProvider>
  );
}
