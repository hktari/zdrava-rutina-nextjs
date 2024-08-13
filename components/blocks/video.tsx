import React from "react";
import { Template } from "tinacms";
import Section from "../layout/section";
import { Container } from "../layout/container";

type VideoBlockProps = {
  data: {
    title: string;
    url: string;
    autoPlay: boolean;
    showControls: boolean;
  };
};

const VideoBlock = (props: VideoBlockProps) => {
  const { title, url, autoPlay, showControls } = props.data;
  return (
    <Section>
      <Container>
        <video
          controls={showControls}
          className="w-100"
          src={url}
          title={title}
          autoPlay={autoPlay}
        ></video>
      </Container>
    </Section>
  );
};

export default VideoBlock;

export const videoBlockSchema: Template = {
  label: "Video",
  name: "video",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Naslov",
    },
    {
      type: "boolean",
      name: "showControls",
      label: "Prikaži kontrole",
    },
    {
      type: "string",
      name: "url",
      label: "URL",
    },
    {
      type: "boolean",
      name: "autoPlay",
      label: "Predvajaj samodejno",
    },
  ],
};
