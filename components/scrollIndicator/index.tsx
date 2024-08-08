import React from "react";
import styles from "./scrollIndicator.module.css";
import { BiChevronsDown } from "react-icons/bi";

const ScrollIndicator = () => {
  const onScrollDown = () => {
    window.scrollTo(0, window.innerHeight);
  };

  return (
    <div className={styles.container}>
      <label
        style={{ visibility: "hidden" }}
        htmlFor="scrollButton"
        aria-label="scroll down"
      ></label>
      <button id="scrollButton" onClick={onScrollDown}>
        <BiChevronsDown className={styles.icon} />
      </button>
    </div>
  );
};

export default ScrollIndicator;
