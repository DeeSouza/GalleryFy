import { useState } from "react";
import { GalleryFy } from "./components/GalleryFy";

function App() {
  const [openInImage, setOpenInImage] = useState(0);
  const [open, setOpen] = useState(false);

  function handleOpen(index: number) {
    setOpenInImage(index);
    setOpen(true);
  }

  const images = [
    "https://assetsnffrgf-a.akamaihd.net/assets/m/501100077/univ/wpub/501100077_univ_cnt_1_lg.jpg",
    "https://assetsnffrgf-a.akamaihd.net/assets/m/501100073/univ/wpub/501100073_univ_cnt_1_lg.jpg",
    "https://assetsnffrgf-a.akamaihd.net/assets/m/102015009/univ/art/102015009_univ_lsr_lg.jpg",
  ];

  return (
    <div>
      <GalleryFy
        open={open}
        images={images}
        selectedImage={openInImage}
        handleClose={() => setOpen(false)}
      />

      {images.map((image, index) => (
        <div key={image} onClick={() => handleOpen(index)}>
          <img src={image} />
        </div>
      ))}
    </div>
  );
}

export default App;
