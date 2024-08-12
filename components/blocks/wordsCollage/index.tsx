import React, { useRef } from "react";
import { graphql } from "gatsby";
import Section from "../Section";
import { useInView } from "framer-motion";

const WordCollageItem = ({
  text,
  fontSize,
  xOffset,
  fontStyle,
  fontWeight,
  initialTranslateX = 0,
  idx,
}) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <span
      ref={ref}
      className={`c-word-collage--item text-center fs-${fontSize} `}
      style={{
        transformOrigin: "center",
        transform: isInView
          ? `translateX(${xOffset}px) scale(1)`
          : `translateX(${initialTranslateX}) scale(0.1)`,
        opacity: isInView ? 1 : 0,
        transition: `all 1.3s ease ${idx * 0.25 + 0.5}s`,
        fontStyle: fontStyle,
        fontWeight: fontWeight,
      }}
    >
      {text}
    </span>
  );
};
const WordsCollageSection = ({ data }) => {
  const { words } = data || [];

  return (
    <Section id="wordsCollage" className="my-md-4 my-2">
      <div className="c-word-collage d-grid gap-3">
        {words?.map((word, idx) => (
          <WordCollageItem
            key={`${word}-${idx}`}
            idx={idx}
            {...word}
            initialTranslateX={
              idx % 2 === 0 ? "clamp(-50vw, 500px)" : "clamp(50vw, 500px)"
            }
          />
        ))}
      </div>
    </Section>
  );
};

export default WordsCollageSection;

const defaultWordCollageItem = {};

export const servicesBlockSchema: import("tinacms").Template = {
  name: "wordCollage",
  label: "Kolaž Besed",
  ui: {
    previewSrc: "",
    defaultItem: {
      items: [
        defaultWordCollageItem,
        defaultWordCollageItem,
        defaultWordCollageItem,
      ],
    },
  },
  fields: [
    {
      type: "object",
      label: "Besede",
      name: "words",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.text,
          };
        },
        defaultItem: {
          ...defaultWordCollageItem,
        },
      },
      fields: [
        {
          type: "string",
          label: "Text",
          name: "text",
        },
        {
          type: "string",
          label: "Velikost Pisave",
          name: "fontSize",
          options: ["1", "2", "3", "4", "5"],
          ui: {
            component: "select",
          },
        },
        {
          type: "number",
          label: "Odmik Horizontalni",
          name: "xOffset",
          ui: {
            // TODO: slider
            component: "number",
          },
        },
        {
          type: "string",
          label: "Stil Pisave",
          name: "fontStyle",
          options: ["normal", "italic"],
          ui: {
            component: "select",
          },
        },
        {
          type: "string",
          label: "Debelina Pisave",
          name: "fontWeight",
          options: ["300", "400", "500", "600", "700", "800", "900"],
          ui: {
            component: "select",
          },
        },
      ],
    },
  ],
};
