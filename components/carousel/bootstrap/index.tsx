import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { PageBlocksBannerBannerImages } from "../../../tina/__generated__/types";
import Image from "next/image";

export default function BootstrapCarousel({
  images,
}: {
  images: PageBlocksBannerBannerImages[];
}) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map(({ src, alt }, index) => (
        <Carousel.Item key={`${alt}-${src}-${index}`} interval={500}>
          {/* TODO: use next/image */}
          {/* <img src={src} alt="slides" /> */}
          <Image src={src} alt={alt} priority fill/>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
