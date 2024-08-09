import React from "react";
import Link from "next/link";

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: "nav-link active" }
    : { className: "nav-link" };
};

// TODO: implement is active
const ExactNavLink = (props) => <Link {...props} />;

const NavigationItemList = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item order-md-1">
        <ExactNavLink href="/">Domov</ExactNavLink>
      </li>
      <li className="nav-item order-md-0">
        <ExactNavLink href="/#services">Storitve</ExactNavLink>
      </li>
      <li className="nav-item order-md-2">
        <ExactNavLink href="/#contact">Kontakt</ExactNavLink>
      </li>
    </ul>
  );
};

export default NavigationItemList;
