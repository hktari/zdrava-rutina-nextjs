"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import NavbarMenu from "./navbarMenu";
import { GlobalHeader } from "../../../tina/__generated__/types";

const useHideShowAnimation = ({ disableTrigger }) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  // should be at least the height of the navbar
  const ScrollThreshold = 100;

  function update(latest, prev) {
    if (disableTrigger) {
      return;
    }

    const scrollDifference = Math.abs(latest - prev);

    if (scrollDifference > ScrollThreshold) {
      if (latest < prev) {
        setHidden(false);
      } else if (latest > prev) {
        setHidden(true);
      }

      setPrevScroll(latest);
    }
  }

  useMotionValueEvent(scrollY, "change", (latest) => {
    update(latest, prevScroll);
  });

  return hidden;
};

const useShowMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showingMenuInProgress, setSetShowingMenuInProgress] = useState(false);
  const ShowMenuDurationSeconds = 0.6;
  const showingMenuProgressTimeoutHandle = React.useRef<NodeJS.Timeout | null>(
    null
  );

  useEffect(() => {
    setSetShowingMenuInProgress(true);

    if (showingMenuProgressTimeoutHandle.current) {
      clearTimeout(showingMenuProgressTimeoutHandle.current);
      showingMenuProgressTimeoutHandle.current = null;
    }

    showingMenuProgressTimeoutHandle.current = setTimeout(() => {
      setSetShowingMenuInProgress(false);
    }, ShowMenuDurationSeconds * 1000);
  }, [showMenu]);

  return {
    showMenu,
    setShowMenu,
    showingMenuInProgress,
    ShowMenuDurationSeconds,
  };
};

type StickyNavbarProps = {
  nav: GlobalHeader["nav"];
  title: string;
  className?: string;
  isHomePage: boolean;
};

const StickyNavbar = ({
  className,
  title: siteTitle,
  nav,
}: StickyNavbarProps) => {
  const {
    showMenu,
    setShowMenu,
    showingMenuInProgress,
    ShowMenuDurationSeconds,
  } = useShowMenu();
  const hidden = useHideShowAnimation({
    disableTrigger: showingMenuInProgress,
  });

  React.useEffect(() => {
    setShowMenu(false);
  }, [hidden, setShowMenu]);

  let navbarState = hidden ? "hidden" : "visible";
  if (showMenu) {
    navbarState = "expanded";
  }

  return (
    // TODO: try to animate background when expanding
    <motion.nav
      className={`c-navbar c-sticky-navbar navbar navbar-expand-md navbar-light py-3 pt-md-3 pb-md-1 
      ${className ? className : ""}`}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: "-4rem" },
        expanded: { opacity: 1, y: 0 },
      }}
      animate={navbarState}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: ShowMenuDurationSeconds,
      }}
    >
      <div className="c-navbar__container w-100 d-flex flex-column">
        <div className="d-flex px-3 justify-content-between justify-content-lg-center align-items-center">
          <h1 className="mb-0">{siteTitle}</h1>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            aria-controls="main-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <NavbarMenu nav={nav} navbarState={navbarState} />
      </div>
    </motion.nav>
  );
};

export default StickyNavbar;
