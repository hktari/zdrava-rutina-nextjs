import React, { useCallback, useState } from "react";
import PhotoAlbumItem from "./photoAlbumItem";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Template } from "tinacms";

export type PhotoAlbumProps = {
  data: {
    images: any[];
  };
};

const GalleryBlock = ({ data }: PhotoAlbumProps) => {
  const images = data.images;
  if (!images) {
    return null;
  }

  return (
    <div>
      <pre>{JSON.stringify(images, null, 2)}</pre>

      {/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {images.map((image) => (
            <PhotoAlbumItem key={photo.id} photo={photo} minPhotoWidth={432} />
          ))}
        </Masonry>
      </ResponsiveMasonry> */}
    </div>
  );
};

export default GalleryBlock;

export const galleryBlockSchema: Template = {
  name: "imageGallery",
  label: "Galerija slika",
  fields: [
    {
      label: "Slike",
      name: "images",
      type: "object",
      list: true,
      fields: [
        {
          label: "Slika",
          name: "src",
          type: "image",
        },
        {
          label: "Alt",
          name: "alt",
          type: "string",
        },
      ],
    },
  ],
};
