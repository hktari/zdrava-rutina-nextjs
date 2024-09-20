import React from "react";
import FixedNavbar from "../navbar/fixedNavbar";
import StickyNavbar from "../navbar/stickyNavbar";
import {
  GlobalHeader,
} from "../../tina/__generated__/types";

type HeaderProps = {
  isHomePage: boolean;
  title: string;
  nav: GlobalHeader["nav"];
};

export default function Header({ isHomePage, title, nav }: HeaderProps) {
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
