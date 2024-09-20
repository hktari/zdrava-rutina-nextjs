import React from "react";
import { PageBlocksImageGalleryImages } from "../../../../tina/__generated__/types";
import Image from "next/image";

type Props = {
  image: PageBlocksImageGalleryImages;
  minPhotoWidth: number;
  sizes: string;
  tinaField: string;
};

const PhotoAlbumItem = ({ image, sizes, tinaField, minPhotoWidth }: Props) => {
  if (!image) {
    return null;
  }

  return (
    <div
      data-tina-field={tinaField}
      className="m-md-1 rounded-1 position-relative "
      style={{ overflow: "hidden", minHeight: "350px" }}
    >
      <a href={image.src}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          style={{ objectFit: "contain" }}
        />
      </a>
    </div>
  );
};

export default PhotoAlbumItem;
