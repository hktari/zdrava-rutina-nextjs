import React from "react";
import { motion } from "framer-motion";
import { fadeInAnimationProps } from "../../../animations/common";
import H2 from "../../h2";
import Section from "../../layout/section";
import Image from "next/image";
import { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { PageBlocksAbout } from "../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Container } from "react-bootstrap";

const AboutBlock = ({ data }: { data: PageBlocksAbout }) => {
  const { avatar, description, heading } = data;

  return (
    <Section id="about" className="c-about-section">
      <Container>
        {heading && (
          <div data-tina-field={tinaField(data, "heading")}>
            <H2>{heading}</H2>
          </div>
        )}
        {avatar && (
          <motion.div {...fadeInAnimationProps}>
            <div
              data-tina-field={tinaField(data, "avatar")}
              className="c-about-section--avatar float-start me-2 me-md-4 rounded"
              style={{ overflow: "hidden" }}
            >
              <Image
                src={avatar.src}
                alt={avatar.alt}
                width={228}
                height={228}
                style={{ objectFit: "cover" }}
              />
            </div>

            {description && (
              <motion.div
                data-tina-field={tinaField(data, "description")}
                style={{ textAlign: "justify" }}
                {...fadeInAnimationProps}
              >
                <TinaMarkdown content={description} />
              </motion.div>
            )}
          </motion.div>
        )}
      </Container>
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
          required: true,
          name: "src",
          type: "image",
        },
        {
          label: "Alt",
          required: true,
          name: "alt",
          type: "string",
        },
      ],
    },
  ],
};
