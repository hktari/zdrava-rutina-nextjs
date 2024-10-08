import type { Collection } from "tinacms";
import { ColorPickerInput } from "../fields/color";

const Global: Collection = {
  label: "Splošno",
  name: "global",
  path: "content/global",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      type: "object",
      label: "SEO",
      name: "seo",
      required: true,
      fields: [
        {
          type: "string",
          label: "Naslov Strani",
          name: "siteName",
          required: true,
        },
        {
          type: "image",
          label: "Logo",
          name: "logo",
          required: true,
        },
        {
          type: "image",
          label: "Slika za deljenje",
          name: "image",
          required: true,
        },
        {
          type: "string",
          label: "Opis",
          name: "description",
          required: true,
        },
        {
          type: "string",
          label: "Ključne Besede",
          name: "keywords",
          required: true,
        },
      ],
    },
    {
      type: "object",
      label: "Header",
      name: "header",
      required: true,
      fields: [
        {
          type: "object",
          label: "Nav Links",
          name: "nav",
          required: true,
          list: true,
          ui: {
            itemProps: (item) => {
              return { label: item?.label };
            },
            defaultItem: {
              href: "/",
              label: "Home",
            },
          },
          fields: [
            {
              type: "string",
              label: "Link",
              name: "href",
              required: true,
            },
            {
              type: "string",
              label: "Label",
              name: "label",
              required: true,
            },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Footer",
      name: "footer",
      fields: [
        {
          type: "string",
          label: "Color",
          name: "color",
          options: [
            { label: "Default", value: "default" },
            { label: "Primary", value: "primary" },
          ],
        },
      ],
    },
    {
      type: "object",
      label: "Theme",
      name: "theme",
      fields: [
        {
          type: "string",
          label: "Primary Color",
          name: "color",
          ui: {
            // @ts-ignore
            component: ColorPickerInput,
          },
        },
        {
          type: "string",
          name: "font",
          label: "Font Family",
          options: [
            {
              label: "System Sans",
              value: "sans",
            },
            {
              label: "Nunito",
              value: "nunito",
            },
            {
              label: "Lato",
              value: "lato",
            },
          ],
        },
        {
          type: "string",
          name: "darkMode",
          label: "Dark Mode",
          options: [
            {
              label: "System",
              value: "system",
            },
            {
              label: "Light",
              value: "light",
            },
            {
              label: "Dark",
              value: "dark",
            },
          ],
        },
      ],
    },
  ],
};

export default Global;
