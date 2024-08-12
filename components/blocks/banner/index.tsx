"use client";
import * as React from "react";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { PageBlocksBanner } from "../../../tina/__generated__/types";
import Image from "next/image";
import Section from "../../layout/section";
import { Container } from "../../layout/container";
import MyCarousel from "../../carousel";
import BootstrapCarousel from "../../carousel/bootstrap";
import styles from "./banner.module.css";
import ScrollIndicator from "../../scrollIndicator";

type Props = {};

const BannerBlock = ({ data }: { data: PageBlocksBanner }) => {
  const DefaultCarouselIntervalSeconds = 2.5;
  const carouselIntervalMs =
    (data?.carouselIntervalSeconds || DefaultCarouselIntervalSeconds) * 1000;

  return (
    <Section>
      {data.bannerImages && (
        <div
          className={styles.container}
          data-tina-field={tinaField(data, "bannerImages")}
        >
          {" "}
          <BootstrapCarousel
            intervalMs={carouselIntervalMs}
            indicators={false}
            controls={false}
            images={data.bannerImages}
          />
          <div className="d-none d-md-block">
            <ScrollIndicator />
          </div>
        </div>
      )}
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
          src: "/uploads/hatha-joga.jpg",
          alt: "woman doing hatha joga",
        },
        {
          src: "/uploads/sea-bend-backward.jpeg",
          alt: "womand sea bend backwards",
        },
      ],
    },
  },
  fields: [
    {
      type: "number",
      name: "carouselIntervalSeconds",
      label: "Časovni Zamik med slajdi",
      description: "Interval in seconds between carousel slides",
      ui: {
        defaultValue: 2.5,
      },
    },
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
