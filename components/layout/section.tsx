import React from "react";
import { useLayout } from "../layout/layout-context";

export const Section = ({ children, color = "", className = "" }) => {
  const { theme } = useLayout();
  return (
    <section
      className={``}
    >
      {children}
    </section>
  );
};
