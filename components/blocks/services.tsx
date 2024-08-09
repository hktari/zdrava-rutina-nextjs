import React from "react";
import { Template } from "tinacms";
import { Section } from "../layout/section";
import { Container } from "react-bootstrap";
import {
  PageBlocksServices,
  PageBlocksServicesItems,
} from "../../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField } from "tinacms/dist/react";

type Props = {};

type ServiceItemProps = {};

const ServiceItem = ({
  title,
  description,
  image,
  link,
}: PageBlocksServicesItems) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img src={image.src} alt={image.alt} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} className="btn btn-primary">
            Več
          </a>
        </div>
      </div>
    </div>
  );
};

export const ServicesBlock = ({ data }: { data: PageBlocksServices }) => {
  return (
    <Section>
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
            {data.items.map((item) => (
              <ServiceItem {...item} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
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
      type: "rich-text",
      label: "Text",
      name: "text",
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
