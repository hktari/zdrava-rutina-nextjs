"use client";

import React from "react";
import { useLayout } from "../layout/layout-context";
import FixedNavbar from "../navbar/fixedNavbar";
import StickyNavbar from "../navbar/stickyNavbar";
import { useTina } from "tinacms/dist/react";
import { PageQuery } from "../../tina/__generated__/types";

export default function Header() {
  const { globalSettings, pageData, theme } = useLayout();
  const { data } = useTina(pageData) as { data: PageQuery };

  return (
    <>
      <FixedNavbar title={data.page.title} className="d-none d-md-block" />
      <StickyNavbar title={data.page.title} className="d-md-none" />
    </>
  );
}
