import { useState } from "react";
import GalleryFy from "@components/GalleryFy";

import image1 from "@assets/image-example-1.png";
import image2 from "@assets/image-example-2.png";
import image3 from "@assets/image-example-3.png";
const pdf = "https://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf";

import { Container } from "./styles";

export default function Home() {
  const [openInImage, setOpenInImage] = useState(0);
  const [open, setOpen] = useState(false);

  function handleOpen(index: number) {
    setOpenInImage(index);
    setOpen(true);
  }

  const images = [image1, image2, image3, pdf];

  return (
    <div>
      <GalleryFy
        open={open}
        dataSource={images}
        startIn={openInImage}
        handleClose={() => setOpen(false)}
      />

      <Container>
        {images.map((image, index) => (
          <div key={image} onClick={() => handleOpen(index)}>
            <img src={image} />
          </div>
        ))}
      </Container>
    </div>
  );
}
