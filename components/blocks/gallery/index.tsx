import React, { useCallback, useState } from "react";
import PhotoAlbumItem from "./photoAlbumItem";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Template } from "tinacms";
import { PageBlocksImageGallery } from "../../../tina/__generated__/types";
import Section from "../../layout/section";
import { tinaField } from "tinacms/dist/react";

export type GalleryBlockProps = {
  data: PageBlocksImageGallery;
};

const GalleryBlock = ({ data }: GalleryBlockProps) => {
  const images = data.images;
  if (!images) {
    return null;
  }

  return (
    <Section>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 900: 3 }}>
        <Masonry>
          {images.map((image) => (
            <PhotoAlbumItem
              tinaField={tinaField(image!, "src")}
              sizes={"(max-width: 768px) 100vw, (max-width: 900px) 50vw, 33vw"}
              key={image?.src}
              image={image!}
              minPhotoWidth={432}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Section>
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
