"use client";
import * as React from "react";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { PageBlocksBanner } from "../../tina/__generated__/types";
import Image from "next/image";
import { Section } from "../layout/section";
import { Container } from "../layout/container";

type Props = {};

const BannerBlock = ({ data }: { data: PageBlocksBanner }) => {
  return (
    <Section>
      <Container
        size="large"
        className="grid grid-cols-1 md:grid-cols-5 gap-14 items-start justify-center"
      >
        <div>{JSON.stringify(data, null, 4)}</div>
      </Container>
    </Section>
  );
};

export default BannerBlock;

export const bannerBlockSchema: Template = {
  name: "banner",
  label: "Naslovna Slika",
  ui: {
    previewSrc: "",
    defaultItem: {
      bannerImages: [
        {
          src: "/uploads/avatar.jpg",
          alt: "portrait",
        },
      ],
    },
  },
  fields: [
    {
      type: "object",
      label: "Slike",
      name: "bannerImages",
      list: true,
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
  ],
};
