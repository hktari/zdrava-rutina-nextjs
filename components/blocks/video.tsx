import React from "react";
import { Template } from "tinacms";
import Section from "../layout/section";
import { Container } from "react-bootstrap";
import { PageBlocksVideo } from "../../tina/__generated__/types";

const VideoBlock = ({ data }: { data: PageBlocksVideo }) => {
  const { videoTitle: title, url, autoPlay, showControls } = data;
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
  ui: {
    defaultItem: {
      title: "Video",
      url: "https://youtu.be/FwOoC0QdeG4?si=IJx6sSwMQ1RbZKcI",
      autoPlay: false,
      showControls: true,
    },
  },
  fields: [
    {
      type: "string",
      name: "videoTitle",
      required: true,
      label: "Naslov",
    },
    {
      type: "boolean",
      name: "showControls",
      required: true,
      label: "Prikaži kontrole",
    },
    {
      type: "string",
      name: "url",
      required: true,
      label: "URL",
    },
    {
      type: "boolean",
      name: "autoPlay",
      required: true,
      label: "Predvajaj samodejno",
    },
  ],
};
