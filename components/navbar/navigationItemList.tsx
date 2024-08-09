"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlobalHeader, GlobalHeaderNav } from "../../tina/__generated__/types";

const ExactNavLink = ({ href, isActive, children }) => (
  <Link href={href} className={`nav-link ${isActive ? "active" : ""}`}>
    {children}
  </Link>
);

type Props = {
  navItems: GlobalHeader["nav"];
};

const NavigationItemList = ({ navItems }: Props) => {
  const pathname = usePathname();

  return (
    <ul className="navbar-nav">
      {navItems.map(({ href, label }, index) => (
        <li key={`${href}-${label}-${index}`} className="nav-item order-md-1">
          <ExactNavLink isActive={pathname.includes(href)} href={href}>
            {label}
          </ExactNavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavigationItemList;
