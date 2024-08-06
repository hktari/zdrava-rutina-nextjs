"use client";
import * as React from "react";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { PageBlocksBanner } from "../../tina/__generated__/types";
import Image from "next/image";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import MyCarousel from "../carousel";
import BootstrapCarousel from "../carousel/bootstrap";

type Props = {};

const BannerBlock = ({ data }: { data: PageBlocksBanner }) => {
  return (
    <Section>
      <Container className="">
        {data.bannerImages && (
          <div data-tina-field={tinaField(data, "bannerImages")}>
            {" "}
            {/* <MyCarousel images={data.bannerImages} /> */}
            <BootstrapCarousel images={data.bannerImages} />
          </div>
        )}
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
