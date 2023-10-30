import { useState } from "react";
import GalleryFy from "@components/GalleryFy";

import image1 from "@assets/image-example-1.png";
import image2 from "@assets/image-example-2.png";
import image3 from "@assets/image-example-3.png";

import { Container } from "./styles";

export default function Home() {
  const [openInImage, setOpenInImage] = useState(0);
  const [open, setOpen] = useState(false);

  function handleOpen(index: number) {
    setOpenInImage(index);
    setOpen(true);
  }

  const dataSource = [
    {
      src: image1,
      type: "image",
    },
    {
      src: image2,
      type: "image",
    },
    {
      src: image3,
      type: "image",
    },
    {
      src: "https://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf",
      type: "pdf",
    },
  ];

  return (
    <div>
      <GalleryFy
        open={open}
        dataSource={dataSource}
        startIn={openInImage}
        handleClose={() => setOpen(false)}
        positionPlacement="bottom"
      />

      <Container>
        {dataSource.map((item, index) => (
          <div key={item.src} onClick={() => handleOpen(index)}>
            <span>{item.src}</span>
          </div>
        ))}
      </Container>
    </div>
  );
}
