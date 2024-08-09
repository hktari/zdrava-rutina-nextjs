import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { PageBlocksBannerBannerImages } from "../../../tina/__generated__/types";
import Image from "next/image";

export default function BootstrapCarousel({
  images,
  indicators = true,
  controls = false,
}: {
  indicators?: boolean;
  controls?: boolean;
  images: PageBlocksBannerBannerImages[];
}) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      indicators={indicators}
      controls={controls}
    >
      {images.map(({ src, alt }, index) => (
        <Carousel.Item key={`${alt}-${src}-${index}`} interval={500}>
          <div className="d-md-none">
            <Image
              src={src}
              alt={alt}
              width={466}
              height={450}
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
          <div className="d-none d-md-block" style={{ height: "100vh" }}>
            <Image objectFit="contain" src={src} alt={alt} priority fill />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
