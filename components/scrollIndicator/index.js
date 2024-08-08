import React from "react";
import styles from "./scrollIndicator.module.scss";
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
        {/* // eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <BiChevronsDown className={styles.icon} />
      </button>
    </div>
  );
};

export default ScrollIndicator;
