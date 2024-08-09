"use client";

import * as React from "react";
import NavigationItemList from "../navigationItemList";
import { GlobalHeader } from "../../../tina/__generated__/types";
import { usePathname } from "next/navigation";

type Props = {
  header: GlobalHeader;
  className?: string;
};

const FixedNavbar = ({ header, className }: Props) => {
  const pageTitle = header.name;
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <nav
      className={`c-navbar c-fixed-navbar navbar navbar-expand-md navbar-light pt-3 pb-2 
      ${className ? className : ""} 
      ${!isHomePage ? "position-relative container" : ""}`}
    >
      <div className="c-navbar__container w-100 d-flex flex-column align-items-center">
        <h1 className="mb-0">{pageTitle}</h1>
        <NavigationItemList navItems={header.nav} />
      </div>
    </nav>
  );
};

export default FixedNavbar;
