import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { PageBlocksBannerBannerImages } from "../../../tina/__generated__/types";
import Image from "next/image";

export default function BootstrapCarousel({
  images,
  intervalMs = 2500,
  indicators = true,
  ImageComponent,
  controls = false,
}: {
  indicators?: boolean;
  intervalMs?: number;
  controls?: boolean;
  ImageComponent?: React.FC<{ src: string; alt: string }>;
  images: PageBlocksBannerBannerImages[];
}) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const defaultImageComponent = ({ src, alt }) => (
    <Image
      style={{ objectFit: "cover", objectPosition: "center" }}
      src={src}
      alt={alt}
      priority
      fill
    />
  );

  return (
    <Carousel
      activeIndex={index}
      interval={intervalMs}
      fade={true}
      onSelect={handleSelect}
      indicators={indicators}
      controls={controls}
    >
      {images.map(({ src, alt }, index) => (
        <Carousel.Item key={`${alt}-${src}-${index}`} interval={500}>
          {ImageComponent ? (
            <ImageComponent src={src} alt={alt} />
          ) : (
            defaultImageComponent({ src, alt })
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
