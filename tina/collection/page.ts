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
      type: "string",
      label: "Title",
      name: "title",
      description:
        "The title of the page. This is used to display the title in the CMS",
      isTitle: true,
      required: true,
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
        galleryBlockSchema
      ],
    },
  ],
};

export default Page;
