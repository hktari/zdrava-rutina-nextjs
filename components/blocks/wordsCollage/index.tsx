import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Section } from "../../layout/section";
import { tinaField } from "tinacms/dist/react";
import { PageBlocksWordCollageWords } from "../../../tina/__generated__/types";

type WordCollageItemProps = {
  word: PageBlocksWordCollageWords;
  initialTranslateX: number | string;
  idx: number;
};

const WordCollageItem = ({
  word,
  initialTranslateX = 0,
  idx,
}: WordCollageItemProps) => {
  const { text, fontSize, xOffset, fontStyle, fontWeight } = word;
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <span
      data-tina-field={tinaField(word, "text")}
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
const WordCollageBlock = ({ data }) => {
  const { words } = data || [];

  return (
    <Section id="wordsCollage" className="my-md-4 my-2">
      <div className="c-word-collage d-grid gap-3">
        {words?.map((word, idx) => (
          <WordCollageItem
            key={`${word}-${idx}`}
            idx={idx}
            word={word}
            initialTranslateX={
              idx % 2 === 0 ? "clamp(-50vw, 500px)" : "clamp(50vw, 500px)"
            }
          />
        ))}
      </div>
    </Section>
  );
};

export default WordCollageBlock;

const defaultWordCollageItem = {
  text: "slabše počutje",
  fontSize: "2",
  xOffset: 5,
  fontStyle: "italic",
  fontWeight: "600",
};

const defaultWordCollageItem2 = {
  text: "pomanjkanje energije",
  fontSize: "5",
  xOffset: -25,
  fontStyle: "normal",
  fontWeight: "400",
};

const defaultWordCollageItem3 = {
  text: "nezadovoljstvo",
  fontSize: "1",
  xOffset: 35,
  fontStyle: "italic",
  fontWeight: "400",
};

const defaultWordCollageItem4 = {
  text: "nevoščljivost",
  fontSize: "1",
  xOffset: -15,
  fontStyle: "normal",
  fontWeight: "400",
};

const defaultWordCollageItem5 = {
  text: "odtujenost",
  fontSize: "3",
  xOffset: 5,
  fontStyle: "italic",
  fontWeight: "600",
};

const defaultWordCollageItem6 = {
  text: "agresija",
  fontSize: "2",
  xOffset: -15,
  fontStyle: "normal",
  fontWeight: "400",
};

export const defaultWordCollageItems = [
  defaultWordCollageItem,
  defaultWordCollageItem2,
  defaultWordCollageItem3,
  defaultWordCollageItem4,
  defaultWordCollageItem5,
  defaultWordCollageItem6,
];

export const wordCollageBlockSchema: import("tinacms").Template = {
  name: "wordCollage",
  label: "Kolaž Besed",
  ui: {
    defaultItem: {
      words: [...defaultWordCollageItems],
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
