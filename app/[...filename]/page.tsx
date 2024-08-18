import React from "react";
import client from "../../tina/__generated__/client";
import ClientPage from "./client-page";
import Layout from "../../components/layout/layout";
import { ResolvingMetadata, Metadata } from "next";
import { Props } from "tinacms";

export default async function Page({
  params,
}: {
  params: { filename: string[] };
}) {
  const data = await client.queries.page({
    relativePath: `${params.filename}.md`,
  });

  return (
    <Layout rawPageData={data}>
      <ClientPage {...data}></ClientPage>
    </Layout>
  );
}

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection?.edges?.map((edge) => ({
    filename: edge?.node?._sys.breadcrumbs,
  }));

  return paths || [];
}

type GenerateMetadataProps = {
  params: { filename: string[] };
  searchParams: { [key: string]: string | string[] | undefined };
};

const formatTitle = (businessName: string, pageTitle: string) => {
  return pageTitle ? `${pageTitle} | ${businessName}` : businessName;
};

export async function generateMetadata(
  { params, searchParams }: GenerateMetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data: globalData } = await client.queries.global({
    relativePath: "index.json",
  });

  const { data } = await client.queries.page({
    relativePath: `${params.filename}.md`,
  });

  const title = formatTitle(
    globalData.global.seo.siteName,
    data?.page?.seo?.title
  );

  return {
    title,
    description:
      data?.page?.seo?.description ?? globalData.global.seo.description,
    keywords: data?.page?.seo?.keywords ?? globalData.global.seo.keywords,
    openGraph: {
      images: [data?.page?.seo?.image ?? globalData.global.seo.image],
    },
    icons: {
      icon: globalData.global.seo.logo,
    },
  };
}
