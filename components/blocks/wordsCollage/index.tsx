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

import schema from "./schema";
export const wordCollageBlockSchema = { ...schema };
