import React from "react";
import Image from "next/image";
import { PageBlocksServicesItems } from "../../../tina/__generated__/types";
import Link from "next/link";

const ServiceCard = ({
  link,
  description,
  image,
  title,
}: PageBlocksServicesItems) => {
  return (
    <Link href={link} className="c-service-card card border-0 border-none p-0">
      {image && (
        <>
          <div className="d-none d-md-block">
            <Image
              className="card-img-top"
              width={650}
              height={382}
              objectFit="cover"
              objectPosition="center"
              src={image.src}
              alt={image.alt}
            />
          </div>
          <div className="d-md-none">
            <Image
              className="card-img-top"
              fill
              objectFit="cover"
              objectPosition="center"
              src={image.src}
              alt={image.alt}
            />
          </div>
        </>
      )}
      <div className="card-body">
        <h5 className="c-service-card__title card-title">{title}</h5>
        <p className="card-text opacity-75">{description}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
