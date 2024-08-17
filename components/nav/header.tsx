"use client";

import React from "react";
import { useLayout } from "../layout/layout-context";
import FixedNavbar from "../navbar/fixedNavbar";
import StickyNavbar from "../navbar/stickyNavbar";
import { useTina } from "tinacms/dist/react";
import { PageQuery, PostQuery } from "../../tina/__generated__/types";

export default function Header() {
  const { globalSettings, pageData, theme } = useLayout();

  const { data } = useTina(
    pageData as {
      query: string;
      variables: object;
      data: PageQuery["page"] | PostQuery["post"];
    }
  );

  const title = data.title || globalSettings?.header?.name || 'Zdrava Rutina';

  return (
    <>
      <FixedNavbar title={title} className="d-none d-md-block" />
      <StickyNavbar title={title} className="d-md-none" />
    </>
  );
}
