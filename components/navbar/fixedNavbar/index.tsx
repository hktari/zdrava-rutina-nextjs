import * as React from "react";
import NavigationItemList from "../navigationItemList";
import { GlobalHeader } from "../../../tina/__generated__/types";

type Props = {
  title: string;
  className?: string;
  nav: GlobalHeader["nav"];
  isHomePage: boolean;
};

const FixedNavbar = ({ className, title, nav, isHomePage }: Props) => {

  return (
    <nav
      className={`c-navbar c-fixed-navbar navbar navbar-expand-md navbar-light pt-3 pb-2 
      ${className ? className : ""} 
      ${!isHomePage ? "position-relative container" : ""}`}
    >
      <div className="c-navbar__container w-100 d-flex flex-column align-items-center">
        <h1 className="mb-0">{title}</h1>
        <NavigationItemList nav={nav} />
      </div>
    </nav>
  );
};

export default FixedNavbar;
