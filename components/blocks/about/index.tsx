import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimationProps } from "../../../animations/common";
import H2 from "../../h2";
import Section from "../../layout/section";
import Image from "next/image";
import { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { PageBlocksAbout } from "../../../tina/__generated__/types";

const AboutBlock = ({ data }: { data: PageBlocksAbout }) => {
  const { avatar, description, heading } = data;

  return (
    <Section id="about" className="c-about-section">
      {heading && (
        <div data-tina-field={tinaField(data, "heading")}>
          <H2>{heading}</H2>
        </div>
      )}
      {avatar && (
        <motion.div {...fadeInAnimationProps}>
          <div
            data-tina-field={tinaField(data, "avatar")}
            className="c-about-section--avatar float-start me-2 rounded"
          >
            <Image
              src={avatar?.src}
              alt={avatar?.alt}
              width={228}
              height={228}
              objectFit="contain"
            />
          </div>

          <motion.p
            data-tina-field={tinaField(data, "description")}
            style={{ textAlign: "justify" }}
            {...fadeInAnimationProps}
          >
            {description}
          </motion.p>
        </motion.div>
      )}
    </Section>
  );
};

export default AboutBlock;

export const aboutBlockSchema: Template = {
  name: "about",
  label: "O meni",
  ui: {
    defaultItem: {
      heading: "O meni",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nullam nec nulla auctor, tincidunt sapien nec, ultricies metus. Nullam nec nulla auctor, tincidunt sapien nec, ultricies metus. Nullam nec nulla auctor, tincidunt sapien nec, ultricies metus.",
      avatar: {
        src: "/uploads/avatar.jpg",
        alt: "avatar",
      },
    },
  },
  fields: [
    {
      type: "string",
      label: "Naslov",
      name: "heading",
    },
    {
      type: "rich-text",
      label: "Opis",
      name: "description",
    },
    {
      label: "Avatar",
      name: "avatar",
      type: "object",
      fields: [
        {
          label: "Slika",
          name: "src",
          type: "image",
        },
        {
          label: "Alt",
          name: "alt",
          type: "string",
        },
      ],
    },
  ],
};
