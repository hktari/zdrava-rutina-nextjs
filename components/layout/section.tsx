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
      className={`c-section ${noSpacing ? "" : "pt-4"} ${
        noContainer ? "" : "container"
      } ${className ? className : ""} ${
        alternativeStyle ? `c-section--alternative` : ""
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
