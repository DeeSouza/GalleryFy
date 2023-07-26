import { Meta, StoryObj } from "@storybook/react";
import { GalleryFyProps } from "./types";
import { GalleryFy } from ".";

const images = [
  "https://assetsnffrgf-a.akamaihd.net/assets/m/501100077/univ/wpub/501100077_univ_cnt_1_lg.jpg",
  "https://assetsnffrgf-a.akamaihd.net/assets/m/501100073/univ/wpub/501100073_univ_cnt_1_lg.jpg",
  "https://assetsnffrgf-a.akamaihd.net/assets/m/102015009/univ/art/102015009_univ_lsr_lg.jpg",
];

export default {
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
    images,
  },
  argTypes: {
    selectedImage: {
      control: "select",
      options: Object.keys(images),
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
} as Meta<GalleryFyProps>;

export const Default: StoryObj<GalleryFyProps> = {};
