import { Meta, StoryObj } from "@storybook/react";
import { GalleryFyProps } from "./types";
import GalleryFy from "./";

import image1 from "@assets/image-example-1.png";
import image2 from "@assets/image-example-2.png";
import image3 from "@assets/image-example-3.png";

const dataSource = [
  {
    src: image1,
    title: "Imagem 1",
  },
  { src: image2, title: "Imagem 2" },
  {
    src: image3,
  },
];

const MetaComponent: Meta<GalleryFyProps> = {
  title: "Components/GalleryFy",
  component: GalleryFy,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
  },
  args: {
    open: true,
    dataSource,
  },
  argTypes: {
    startIn: {
      control: "select",
      options: Object.keys(dataSource),
    },
    handleClose: {
      docs: {
        disable: false,
      },
      table: {
        disable: true,
      },
    },
  },
};

export default MetaComponent;
export const Default: StoryObj<GalleryFyProps> = {};
