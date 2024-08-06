"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { PageBlocksBannerBannerImages } from "../../tina/__generated__/types";
import Image from "next/image";

const MyCarousel = ({
  className,
  images,
  hideIndicators = false,
  hideControls = false,
}: {
  className?: string;
  images: PageBlocksBannerBannerImages[];
  hideIndicators?: boolean;
  hideControls?: boolean;
}) => {
  return (
    <Carousel
      animationHandler={"fade"}
      transitionTime={1500}
      className={className || "c-carousel"}
      autoPlay
      infiniteLoop
      interval={4500}
      showIndicators={!hideIndicators}
      showArrows={!hideControls}
      showThumbs={false}
      showStatus={false}
    >
      {images
        .filter(({ src }) => !!src)
        .map(({ src, alt }, index) => (
          <img
            key={`${alt}-${src}-${index}`}
            className="w-full h-auto max-w-full rounded-lg"
            style={{ objectFit: "cover" }}
            alt={alt}
            src={src}
          />
        ))}
    </Carousel>
  );
};

export default MyCarousel;
