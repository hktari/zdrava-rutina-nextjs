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

  let title = globalSettings?.seo?.siteName || "";
  if (data.__typename === "Page") {
    title = data.seo.title;
  } else if (data.__typename === "Post") {
    title = data.title;
  }

  const nav = globalSettings?.header?.nav || [];

  const isHomePage = data._sys.breadcrumbs.toString() === "home";

  return (
    <>
      <FixedNavbar
        isHomePage={isHomePage}
        title={title}
        nav={nav}
        className="d-none d-md-block"
      />
      <StickyNavbar
        isHomePage={isHomePage}
        title={title}
        nav={nav}
        className="d-md-none"
      />
    </>
  );
}
