import React from "react";

type SectionProps = {
  className?: string;
  children: React.ReactNode;
  noSpacing?: boolean;
  noContainer?: boolean;
  id?: string;
  alternativeStyle?: boolean;
};

const Section = ({
  className,
  children,
  noSpacing,
  noContainer,
  id,
  alternativeStyle,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={`c-section ${noSpacing ? "" : "mt-4 mt-md-5"} ${
        className ? className : ""
      } ${alternativeStyle ? `c-section--alternative py-3` : ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
