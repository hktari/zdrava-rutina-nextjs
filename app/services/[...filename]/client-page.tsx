"use client";
import { useTina } from "tinacms/dist/react";
import { Blocks } from "../../../components/blocks";
import { ServiceQuery } from "../../../tina/__generated__/types";

interface ClientServiceProps {
  data: ServiceQuery;
  variables: {
    relativePath: string;
  };
  query: string;
}

export default function ServiceClientPage(props: ClientServiceProps) {
  const { data } = useTina({ ...props });
  return <Blocks blocks={data?.service?.blocks} />;
}
