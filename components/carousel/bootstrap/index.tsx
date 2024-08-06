import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { PageBlocksBannerBannerImages } from "../../../tina/__generated__/types";

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
          <img src={src} alt="slides" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
