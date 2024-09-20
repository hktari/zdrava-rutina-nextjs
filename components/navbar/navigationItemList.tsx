"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GlobalHeader } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";

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
      {nav.map((navItem, index) => {
        const { href, label } = navItem;

        const isHomePage = href === "/";

        return (
          <li
            data-tina-field={tinaField(navItem, "label")}
            key={`${href}-${label}-${index}`}
            className={`c-nav-item-list__item nav-item ${isHomePage ? "c-nav-item-list__item--home" : ""}`}
          >
            <ExactNavLink
              isActive={pathNameMatchesHref(href, pathname)}
              href={href}
            >
              {label}
            </ExactNavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationItemList;
