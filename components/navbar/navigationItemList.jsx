import React from "react"
import { Link } from "gatsby"

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: "nav-link active" }
    : { className: "nav-link" }
}

const ExactNavLink = props => <Link getProps={isActive} {...props} />

const NavigationItemList = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item order-md-1">
        <ExactNavLink to="/">Domov</ExactNavLink>
      </li>
      <li className="nav-item order-md-0">
        <ExactNavLink to="/#services">Storitve</ExactNavLink>
      </li>
      <li className="nav-item order-md-2">
        <ExactNavLink to="/#contact">Kontakt</ExactNavLink>
      </li>
    </ul>
  )
}

export default NavigationItemList
