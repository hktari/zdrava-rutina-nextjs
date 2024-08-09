import * as React from "react";
import NavigationItemList from "../navigationItemList";
import { GlobalHeader } from "../../../tina/__generated__/types";

type Props = {
  header: GlobalHeader;
  className?: string;
};

const FixedNavbar = ({ header, className }: Props) => {
  const pageTitle = header.name;

  // TODO: use next API to retrieve is HomePage or not
  // const isHomePage = pageTitle === siteTitle;
  const isHomePage = false;

  return (
    <nav
      className={`c-navbar c-fixed-navbar navbar navbar-expand-md navbar-light pt-3 pb-2 
      ${className ? className : ""} 
      ${!isHomePage ? "position-relative container" : ""}`}
    >
      <div className="c-navbar__container w-100 d-flex flex-column align-items-center">
        <h1 className="mb-0">{pageTitle}</h1>
        <NavigationItemList />
      </div>
    </nav>
  );
};

export default FixedNavbar;
