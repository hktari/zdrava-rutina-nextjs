"use client";

import React from "react";
import styles from "./scrollIndicator.module.css";
import { BiChevronsDown } from "react-icons/bi";

const ScrollIndicator = () => {
  const onScrollDown = () => {
    window.scrollTo(0, window.innerHeight);
  };

  return (
    <div className={styles.container} onClick={onScrollDown}>
      <label
        style={{ visibility: "hidden" }}
        htmlFor="scrollButton"
        aria-label="scroll down"
      ></label>
      <button id="scrollButton">
        <BiChevronsDown className={styles.icon} />
      </button>
    </div>
  );
};

export default ScrollIndicator;
