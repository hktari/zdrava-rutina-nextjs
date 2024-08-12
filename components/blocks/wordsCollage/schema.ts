import { Template } from "tinacms";

const defaultWordCollageItem = {
  text: "slabše počutje",
  fontSize: "2",
  xOffset: 5,
  fontStyle: "italic",
  fontWeight: "600",
};

const defaultWordCollageItem2 = {
  text: "pomanjkanje energije",
  fontSize: "5",
  xOffset: -25,
  fontStyle: "normal",
  fontWeight: "400",
};

const defaultWordCollageItem3 = {
  text: "nezadovoljstvo",
  fontSize: "1",
  xOffset: 35,
  fontStyle: "italic",
  fontWeight: "400",
};

const defaultWordCollageItem4 = {
  text: "nevoščljivost",
  fontSize: "1",
  xOffset: -15,
  fontStyle: "normal",
  fontWeight: "400",
};

const defaultWordCollageItem5 = {
  text: "odtujenost",
  fontSize: "3",
  xOffset: 5,
  fontStyle: "italic",
  fontWeight: "600",
};

const defaultWordCollageItem6 = {
  text: "agresija",
  fontSize: "2",
  xOffset: -15,
  fontStyle: "normal",
  fontWeight: "400",
};

const defaultWordCollageItems = [
  defaultWordCollageItem,
  defaultWordCollageItem2,
  defaultWordCollageItem3,
  defaultWordCollageItem4,
  defaultWordCollageItem5,
  defaultWordCollageItem6,
];

const wordCollageBlockSchema = {
  name: "wordCollage",
  label: "Kolaž Besed",
  ui: {
    defaultItem: {
      words: [...defaultWordCollageItems],
    },
  },
  fields: [
    {
      type: "object",
      label: "Besede",
      name: "words",
      list: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.text,
          };
        },
        defaultItem: {
          ...defaultWordCollageItem,
        },
      },
      fields: [
        {
          type: "string",
          label: "Text",
          name: "text",
        },
        {
          type: "string",
          label: "Velikost Pisave",
          name: "fontSize",
          options: ["1", "2", "3", "4", "5"],
          ui: {
            component: "select",
          },
        },
        {
          type: "number",
          label: "Odmik Horizontalni",
          name: "xOffset",
          ui: {
            // TODO: slider
            component: "number",
          },
        },
        {
          type: "string",
          label: "Stil Pisave",
          name: "fontStyle",
          options: ["normal", "italic"],
          ui: {
            component: "select",
          },
        },
        {
          type: "string",
          label: "Debelina Pisave",
          name: "fontWeight",
          options: ["300", "400", "500", "600", "700", "800", "900"],
          ui: {
            component: "select",
          },
        },
      ],
    },
  ],
} as Template;

export default wordCollageBlockSchema;
