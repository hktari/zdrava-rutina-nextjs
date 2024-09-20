import React from "react";
import { motion } from "framer-motion";
import NavigationItemList from "../navigationItemList";
import { GlobalHeader } from "../../../tina/__generated__/types";

type NavbarMenuProps = {
  navbarState: string;
  nav: GlobalHeader["nav"];
};

const NavbarMenu = ({ navbarState, nav }: NavbarMenuProps) => {
  return (
    <>
      <motion.div
        className={`c-sticky-navbar__menu justify-content-lg-center px-3`}
        id="main-navbar"
        animate={navbarState}
        initial="hidden"
        transition={{
          ease: [0.1, 0.25, 0.3, 1],
          duration: 0.6,
        }}
        variants={{
          visible: { opacity: 0, y: -50, display: "none" },
          hidden: { opacity: 0, y: -50, display: "none" },
          expanded: { opacity: 1, y: 0, display: "block" },
        }}
      >
        <NavigationItemList nav={nav} />
      </motion.div>
    </>
  );
};

export default NavbarMenu;
