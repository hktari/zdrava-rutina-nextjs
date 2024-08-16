import React from "react";
import Image from "next/image";
import { PageBlocksServicesItems } from "../../../tina/__generated__/types";
import Link from "next/link";
import { tinaField } from "tinacms/dist/react";

const ServiceCard = (serviceCardData: PageBlocksServicesItems) => {
  const { link, description, image, title } = serviceCardData;

  return (
    <Link href={link} className="text-decoration-none">
      <div className="c-service-card card border-0 border-none p-0">
        {image && (
          <div
            data-tina-field={tinaField(serviceCardData, "image")}
            className="card-img-top position-relative"
            style={{ overflow: "hidden" }}
          >
            <Image
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              src={image.src}
              alt={image.alt}
            />
          </div>
        )}
        <div className="card-body text-center">
          <h5
            data-tina-field={tinaField(serviceCardData, "title")}
            className="c-service-card__title card-title text-decoration-none"
          >
            {title}
          </h5>
          <p
            className="card-text opacity-75 text-decoration-none"
            data-tina-field={tinaField(serviceCardData, "description")}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
