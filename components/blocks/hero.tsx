"use client";
import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import type { Template } from "tinacms";
import { PageBlocksHero } from "../../tina/__generated__/types";
import { tinaField } from "tinacms/dist/react";
import Image from "next/image";
import Section from "../layout/section";
import { Actions } from "./actions";

import styles from "./hero.module.css";
import { Container } from "react-bootstrap";

export const Hero = ({ data }: { data: PageBlocksHero }) => {
  return (
    <Section color={data.color}>
      <Container size="large" className={styles.container}>
        <div>
          {data.headline && (
            <h3
              data-tina-field={tinaField(data, "headline")}
              className={styles.headline}
            >
              <span>{data.headline}</span>
            </h3>
          )}
          {data.text && (
            <div data-tina-field={tinaField(data, "text")} className={``}>
              <TinaMarkdown content={data.text} />
            </div>
          )}
          <div className="">
            {data.image && (
              <div data-tina-field={tinaField(data.image, "src")} className="float-start me-md-4 mb-2 mb-md-0">
                <Image
                  className=""
                  style={{ objectFit: "contain" }}
                  alt={data.image.alt}
                  src={data.image.src}
                  width={300}
                  height={300}
                />
              </div>
            )}{" "}
            {data.text2 && (
              <div data-tina-field={tinaField(data, "text2")} className={``}>
                <TinaMarkdown content={data.text2} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export const heroBlockSchema: Template = {
  name: "hero",
  label: "Hero",
  ui: {
    previewSrc: "/blocks/hero.png",
    defaultItem: {
      tagline: "Here's some text above the other text",
      headline: "O meni",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ullam voluptas obcaecati dicta, voluptates a? Fugiat mollitia voluptatem quae architecto, minima sequi aperiam amet quibusdam unde! Iusto harum eius corrupti?",
      text2:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam eligendi distinctio consequuntur similique, ducimus eum molestias qui facilis asperiores? Unde, officia nostrum placeat deserunt explicabo eligendi nesciunt soluta asperiores nihil labore quas, dolores, veritatis harum.",
    },
  },
  fields: [
    {
      type: "string",
      label: "Tagline",
      name: "tagline",
    },
    {
      type: "string",
      label: "Headline",
      name: "headline",
    },
    {
      label: "Text-1",
      name: "text",
      type: "rich-text",
    },
    {
      type: "rich-text",
      label: "Text-2",
      name: "text2",
    },
    {
      label: "Actions",
      name: "actions",
      type: "object",
      list: true,
      ui: {
        defaultItem: {
          label: "Action Label",
          type: "button",
          icon: true,
          link: "/",
        },
        itemProps: (item) => ({ label: item.label }),
      },
      fields: [
        {
          label: "Label",
          name: "label",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          type: "string",
          options: [
            { label: "Button", value: "button" },
            { label: "Link", value: "link" },
          ],
        },
        {
          label: "Icon",
          name: "icon",
          type: "boolean",
        },
        {
          label: "Link",
          name: "link",
          type: "string",
        },
      ],
    },
    {
      type: "object",
      label: "Image",
      name: "image",
      fields: [
        {
          name: "src",
          label: "Image Source",
          type: "image",
        },
        {
          name: "alt",
          label: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      type: "string",
      label: "Color",
      name: "color",
      options: [
        { label: "Default", value: "default" },
        { label: "Tint", value: "tint" },
        { label: "Primary", value: "primary" },
      ],
    },
  ],
};
