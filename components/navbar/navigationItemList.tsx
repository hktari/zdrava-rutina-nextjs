"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlobalHeader } from "../../tina/__generated__/types";

const ExactNavLink = ({ href, isActive, children }) => (
  <Link href={href} className={`nav-link ${isActive ? "active" : ""}`}>
    {children}
  </Link>
);

const pathNameMatchesHref = (href, pathname) => {
  return pathname.replace("/", "") === href;
};

type NavigationItemListProps = {
  nav: GlobalHeader["nav"];
};

const NavigationItemList = ({ nav }: NavigationItemListProps) => {
  const pathname = usePathname();

  return (
    <ul className="navbar-nav">
      {nav.map(({ href, label }, index) => (
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
