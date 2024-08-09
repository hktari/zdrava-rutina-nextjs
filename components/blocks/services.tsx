import React from "react";
import { Template } from "tinacms";

type Props = {};

const ServicesBlock = (props: Props) => {
  return <div>ServicesBlock</div>;
};

const defaultService = {
  title: "Storitev 1",
  text: "Opis storitve hatha joga",
  image: {
    src: "/uploads/hatha-joga.jpg",
    alt: "Hatha joga",
  },
};

export const servicesBlockSchema: Template = {
  name: "services",
  label: "Storitve",
  ui: {
    previewSrc: "",
    defaultItem: {
      items: [defaultService, defaultService, defaultService],
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "string",
      label: "Text",
      name: "text",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "object",
      label: "Seznam Storitev",
      name: "items",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.title,
          };
        },
        defaultItem: {
          ...defaultService,
        },
      },
      fields: [
        {
          type: "string",
          label: "Naslov",
          name: "title",
        },
        {
          type: "string",
          label: "Povezava",
          name: "link",
        },
        {
          type: "string",
          label: "Opis",
          name: "description",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "object",
          label: "Slika",
          name: "image",
          fields: [
            {
              type: "string",
              label: "Slika",
              name: "src",
            },
            {
              type: "string",
              label: "Opis",
              name: "alt",
            },
          ],
        },
      ],
    },
  ],
};

export default ServicesBlock;
