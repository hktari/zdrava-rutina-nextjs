import React from "react";
import Image from "next/image";
import { cn } from "../../../lib/utils";
import { PageBlocksBannerBannerImages } from "../../../tina/__generated__/types";

export type BannerImageProps = {
  src: string;
  alt: string;
  sizes?: string;
};

const BannerImage = ({ src, alt, sizes }: BannerImageProps) => {
  return (
    <div className={cn("c-banner__image position-relative")}>
      <Image
        className=""
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes={sizes || ""}
        quality={100}
        src={src}
        alt={alt}
        priority
        fill
      />
    </div>
  );
};

export default BannerImage;
