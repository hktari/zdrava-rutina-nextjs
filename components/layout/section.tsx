import React from "react";
import { useLayout } from "../layout/layout-context";

export const Section = ({ children, color = "", className = "", id = "" }) => {
  const { theme } = useLayout();
  return (
    <section id={id} className={``}>
      {children}
    </section>
  );
};
