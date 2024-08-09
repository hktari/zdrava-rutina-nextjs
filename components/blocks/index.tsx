import { tinaField } from "tinacms/dist/react";
import { Page, PageBlocks, Service } from "../../tina/__generated__/types";
import { Hero } from "./hero";
import { Content } from "./content";
import { Features } from "./features";
import { Testimonial } from "./testimonial";
import BannerBlock from "./banner";

type Prop = {
  blocks: Page["blocks"] | Service["blocks"];
};

export const Blocks = ({ blocks }: Prop) => {
  return (
    <>
      {blocks
        ? blocks.map(function (block, i) {
            return (
              <div key={i} data-tina-field={tinaField(block)}>
                <Block {...block} />
              </div>
            );
          })
        : null}
    </>
  );
};

const Block = (block: PageBlocks) => {
  switch (block.__typename) {
    case "PageBlocksHero":
      return <Hero data={block} />;
    case "PageBlocksContent":
      return <Content data={block} />;
    case "PageBlocksFeatures":
      return <Features data={block} />;
    case "PageBlocksTestimonial":
      return <Testimonial data={block} />;
    case "PageBlocksBanner":
      return <BannerBlock data={block} />;
    default:
      return null;
  }
};
