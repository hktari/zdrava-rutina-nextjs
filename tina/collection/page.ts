import type { Collection } from "tinacms";
import { contentBlockSchema } from "../../components/blocks/content";
import { bannerBlockSchema } from "../../components/blocks/banner";
import { servicesBlockSchema } from "../../components/blocks/services";
import { wordCollageBlockSchema } from "../../components/blocks/wordsCollage";
import { contactBlockSchema } from "../../components/blocks/contact";
import { aboutBlockSchema } from "../../components/blocks/about";
import { videoBlockSchema } from "../../components/blocks/video";
import { galleryBlockSchema } from "../../components/blocks/gallery";

const Page: Collection = {
  label: "Pages",
  name: "page",
  path: "content/pages",
  ui: {
    router: ({ document }) => {
      if (document._sys.filename === "home") {
        return `/`;
      } else {
        return document._sys.filename;
      }
    },
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
          label: "Naslov",
          name: "title",
          required: true,
        },
        {
          type: "image",
          label: "Slika za deljenje",
          name: "image",
        },
        {
          type: "string",
          label: "Opis",
          name: "description",
        },
        {
          type: "string",
          label: "Ključne Besede",
          name: "keywords",
        },
      ],
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Sections",
      ui: {
        visualSelector: true,
      },
      templates: [
        contentBlockSchema,
        bannerBlockSchema,
        servicesBlockSchema,
        wordCollageBlockSchema,
        contactBlockSchema,
        aboutBlockSchema,
        videoBlockSchema,
        galleryBlockSchema,
      ],
    },
  ],
};

export default Page;
