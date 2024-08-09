import type { Collection } from "tinacms";
import { bannerBlockSchema } from "../../components/blocks/banner";
import { contentBlockSchema } from "../../components/blocks/content";
import { testimonialBlockSchema } from "../../components/blocks/testimonial";
import { heroBlockSchema } from "../../components/blocks/hero";
import { featureBlockSchema } from "../../components/blocks/features";

const Service: Collection = {
  label: "Storitve",
  name: "service",
  path: "content/services",
  format: "md",
  ui: {
    router: ({ document }) => {
      return `/services/${document._sys.breadcrumbs.join("/")}`;
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
      isTitle: true,
      required: true,
    },

    {
      type: "rich-text",
      label: "Kratek Opis",
      name: "description",
    },
    {
      type: "object",
      list: true,
      name: "blocks",
      label: "Vsebina",
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlockSchema,
        //@ts-ignore
        featureBlockSchema,
        contentBlockSchema,
        testimonialBlockSchema,
        bannerBlockSchema,
      ],
    },
  ],
};

export default Service;
