import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { PageBlocksBannerBannerImages } from "../../../tina/__generated__/types";
import Image from "next/image";

export default function BootstrapCarousel({
  images,
  intervalMs = 2500,
  indicators = true,
  controls = false,
}: {
  indicators?: boolean;
  intervalMs?: number;
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
      interval={intervalMs}
      fade={true}
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
              style={{
                objectFit: "cover",
              }}
              priority
            />
          </div>
          <div className="d-none d-md-block" style={{ height: "100vh" }}>
            <Image
              style={{ objectFit: "cover" }}
              src={src}
              alt={alt}
              priority
              fill
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
