import React from "react";
import { PageBlocksImageGalleryImages } from "../../../../tina/__generated__/types";
import Image from "next/image";

type Props = {
  image: PageBlocksImageGalleryImages;
  minPhotoWidth: number;
};

const PhotoAlbumItem = ({ image, minPhotoWidth }: Props) => {
  if (!image) {
    return null;
  }

  return (
    <div className="m-1 rounded-1 " style={{ overflow: "hidden" }}>
      <a href={image.src}>
        <Image
          src={image.src}
          alt={image.alt}
          width={minPhotoWidth}
          height={minPhotoWidth}
        />
      </a>
    </div>
  );
};

export default PhotoAlbumItem;
