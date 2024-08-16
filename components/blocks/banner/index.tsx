"use client";
import * as React from "react";
import type { Template } from "tinacms";
import { tinaField } from "tinacms/dist/react";
import { PageBlocksBanner } from "../../../tina/__generated__/types";
import Section from "../../layout/section";
import BootstrapCarousel from "../../carousel/bootstrap";
import ScrollIndicator from "../../scrollIndicator";
import Image from "next/image";
import { cn } from "../../../lib/utils";
import BannerImage, { BannerImageProps } from "./bannerImage";

type Props = {};

const BannerBlock = ({ data }: { data: PageBlocksBanner }) => {
  const DefaultCarouselIntervalSeconds = 2.5;
  const carouselIntervalMs =
    (data?.carouselIntervalSeconds || DefaultCarouselIntervalSeconds) * 1000;

  const fullScreen = data.fullScreen || false;

  const bannerImageSizes = fullScreen
    ? "100vw"
    : "(max-width: 768px) 100vw, 80vw";

  const bannerImages: BannerImageProps[] =
    data?.bannerImages
      // TODO: Fix this type issue
      ?.filter((img) => img && img?.src && img?.alt)
      .map((img) => ({
        src: img.src!,
        alt: img.alt!,
        sizes: bannerImageSizes,
      })) || [];

  return (
    <Section noContainer={data.fullScreen} noSpacing className="px-0">
      <div
        className={cn(
          "c-banner",
          data.fullScreen ? "c-banner--full-screen" : ""
        )}
      >
        {bannerImages && (
          <div
            className={"c-banner__container"}
            data-tina-field={tinaField(data, "bannerImages")}
          >
            {" "}
            <BootstrapCarousel
              intervalMs={carouselIntervalMs}
              indicators={false}
              controls={false}
              images={bannerImages}
              ImageComponent={BannerImage}
            />
            {data.fullScreen && (
              <div className="d-none d-md-block">
                <ScrollIndicator />
              </div>
            )}
          </div>
        )}
      </div>
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
      type: "boolean",
      name: "fullScreen",
      label: "Celozaslonski način",
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
