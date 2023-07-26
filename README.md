# GalleryFy

GalleryFy is a React library to show images in the gallery.

## Installation

* Node v14+
* NPM

```bash
npm install @deesouza/galleryfy
```

## Usage

```js
import GalleryFy from '@deesouza/galleryfy'

const images [
    'https://cdn.images.com/image-1.png',
    'https://cdn.images.com/image-2.png',
    'https://cdn.images.com/image-3.png',
];

const [openInImage, setOpenInImage] = useState(0);
const [open, setOpen] = useState(false);

function handleOpen(index: number) {
    setOpenInImage(index);
    setOpen(true);
}

<GalleryFy
    open={open}
    images={images}
    selectedImage={openInImage}
    handleClose={() => setOpen(false)}
/>

<Container>
    {images.map((image, index) => (
        <div key={image} onClick={() => handleOpen(index)}>
            <img src={image} />
        </div>
    ))}
</Container>
``````