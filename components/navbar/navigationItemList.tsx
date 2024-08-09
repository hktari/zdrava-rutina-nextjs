"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlobalHeader, GlobalHeaderNav } from "../../tina/__generated__/types";
import { useLayout } from "../layout/layout-context";

const ExactNavLink = ({ href, isActive, children }) => (
  <Link href={href} className={`nav-link ${isActive ? "active" : ""}`}>
    {children}
  </Link>
);

const pathNameMatchesHref = (href, pathname) => {
  return pathname.replace("/", "") === href;
};

const NavigationItemList = () => {
  const { globalSettings } = useLayout();
  const navItems = globalSettings.header.nav;

  const pathname = usePathname();

  return (
    <ul className="navbar-nav">
      {navItems.map(({ href, label }, index) => (
        <li key={`${href}-${label}-${index}`} className="nav-item order-md-1">
          <ExactNavLink
            isActive={pathNameMatchesHref(href, pathname)}
            href={href}
          >
            {label}
          </ExactNavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavigationItemList;
