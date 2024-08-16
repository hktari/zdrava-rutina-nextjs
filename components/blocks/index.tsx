import { tinaField } from "tinacms/dist/react";
import { Page, PageBlocks } from "../../tina/__generated__/types";
import { Hero } from "./hero";
import { Content } from "./content";
import { Features } from "./features";
import { Testimonial } from "./testimonial";
import BannerBlock from "./banner";
import ServicesBlock from "./services";
import WordCollageBlock from "./wordsCollage";
import ContactBlock from "./contact";
import AboutBlock from "./about";
import VideoBlock from "./video";
import GalleryBlock from "./gallery";

type Prop = {
  blocks: Page["blocks"];
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
    case "PageBlocksContent":
      return <Content data={block} />;
    case "PageBlocksBanner":
      return <BannerBlock data={block} />;
    case "PageBlocksServices":
      return <ServicesBlock data={block} />;
    case "PageBlocksWordCollage":
      return <WordCollageBlock data={block} />;
    case "PageBlocksContact":
      return <ContactBlock data={block} />;
    case "PageBlocksAbout":
      return <AboutBlock data={block} />;
    case "PageBlocksVideo":
      return <VideoBlock data={block} />;
    case "PageBlocksImageGallery":
      return <GalleryBlock data={block} />;
    default:
      return null;
  }
};
