import React from "react";
import { Template } from "tinacms";
import Section from "../../layout/section";
import { Container } from "react-bootstrap";
import {
  PageBlocksServices,
  PageBlocksServicesItems,
} from "../../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";
import ServiceCard from "./serviceCard";
import ServicesCardGroup from "./servicesCardGroup";

export const ServicesBlock = ({ data }: { data: PageBlocksServices }) => {
  return (
    <Section alternativeStyle>
      <Container>
        {data.title && (
          <h2 data-tina-field={tinaField(data, "title")}>{data.title}</h2>
        )}
        {data.text && (
          <div data-tina-field={tinaField(data, "text")}>
            <TinaMarkdown content={data.text}></TinaMarkdown>
          </div>
        )}

        {data.items && (
          <div data-tina-field={tinaField(data, "items")} className="row">
            <ServicesCardGroup {...data} />
          </div>
        )}
      </Container>
    </Section>
  );
};

const defaultServiceItem = {
  title: "Storitev 1",
  description: "Opis storitve hatha joga",
  image: {
    src: "/uploads/hatha-joga.jpg",
    alt: "Hatha joga",
  },
  link: "/hatha-joga",
};

export const servicesBlockSchema: Template = {
  name: "services",
  label: "Storitve",
  ui: {
    previewSrc: "",
    defaultItem: {
      items: [defaultServiceItem, defaultServiceItem, defaultServiceItem],
    },
  },
  fields: [
    {
      type: "string",
      label: "Title",
      name: "title",
    },
    {
      type: "rich-text",
      label: "Text",
      name: "text",
    },
    {
      type: "object",
      label: "Seznam Storitev",
      name: "items",
      list: true,
      required: true,
      ui: {
        itemProps: (item) => {
          return {
            label: item?.title,
          };
        },
        defaultItem: {
          ...defaultServiceItem,
        },
      },
      fields: [
        {
          type: "string",
          label: "Naslov",
          required: true,
          name: "title",
        },
        {
          type: "string",
          label: "Povezava",
          required: true,
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
              type: "image",
              label: "Slika",
              required: true,
              name: "src",
            },
            {
              type: "string",
              label: "Opis",
              required: true,
              name: "alt",
            },
          ],
        },
      ],
    },
  ],
};

export default ServicesBlock;
