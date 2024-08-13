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

type Props = {};

const BannerImage =
  ({ fullScreen }: { fullScreen: boolean }) =>
  ({ src, alt }: { src: string; alt: string }) => {
    return (
      <div className={cn("c-banner__image position-relative")}>
        <Image
          className=""
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes={fullScreen ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
          src={src}
          alt={alt}
          priority
          fill
        />
      </div>
    );
  };

const BannerBlock = ({ data }: { data: PageBlocksBanner }) => {
  const DefaultCarouselIntervalSeconds = 2.5;
  const carouselIntervalMs =
    (data?.carouselIntervalSeconds || DefaultCarouselIntervalSeconds) * 1000;

  const bannerImageComponent = BannerImage({ fullScreen: data.fullScreen });

  return (
    <Section noContainer={data.fullScreen} noSpacing className="px-0">
      <div
        className={cn(
          "c-banner",
          data.fullScreen ? "c-banner--full-screen" : ""
        )}
      >
        {data.bannerImages && (
          <div
            className={"c-banner__container"}
            data-tina-field={tinaField(data, "bannerImages")}
          >
            {" "}
            <BootstrapCarousel
              intervalMs={carouselIntervalMs}
              indicators={false}
              controls={false}
              images={data.bannerImages}
              ImageComponent={bannerImageComponent}
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
