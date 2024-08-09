import React from "react";
import client from "../../../tina/__generated__/client";
import Layout from "../../../components/layout/layout";
import ServiceClientPage from "./client-page";

export default async function ServicePage({
  params,
}: {
  params: { filename: string[] };
}) {
  const data = await client.queries.service({
    relativePath: `${params.filename.join("/")}.md`,
  });

  return (
    <Layout rawPageData={data}>
      <ServiceClientPage {...data} />
    </Layout>
  );
}

export async function generateStaticParams() {
  const services = await client.queries.serviceConnection();
  const paths = services.data?.serviceConnection.edges.map((edge) => ({
    filename: edge.node._sys.breadcrumbs,
  }));
  return paths || [];
}
