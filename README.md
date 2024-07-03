# GalleryFy

GalleryFy is a simple React library to show images and PDF files in the gallery.

![Example GalleryFy](./galleryfy.png)

## Prerequisites

- Node v18+
- NPM v10+

## Install

```bash
npm i @deesouza/galleryfy
```

## Usage

```jsx
export default function Home() {
  const dataSource = [
    {
      src: "https://cdn.images.com/image-1.png",
      title: "Image",
    },
    {
      src: "https://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf",
      title: "File PDF",
    },
  ];

  const [openIn, setOpenIn] = useState(0);
  const [open, setOpen] = useState(false);

  function handleOpen(index: number) {
    setOpenIn(index);
    setOpen(true);
  }

  return (
    <div>
      <GalleryFy
        open={open}
        dataSource={dataSource}
        startIn={openIn}
        handleClose={() => setOpen(false)}
      />

      <div>
        {dataSource.map((item, index) => (
          <div key={item.src} onClick={() => handleOpen(index)}>
            <span>{item.src}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

You can also use images from assets.

```js
import image1 from "@assets/images/image-1.jpg";

const images = [{ src: image1 }];
```

## API

| Prop                | Value           | Default | Description                          |
| :------------------ | :-------------- | :------ | :----------------------------------- |
| `open`              | `boolean`       | `false` | Control open and close of gallery    |
| `dataSource`        | `array`         |         | Data of gallery                      |
| `startIn`           | `number`        |         | Index than start gallery             |
| `handleClose`       | `function`      |         | Function execute to close gallery    |
| `showThumbs`        | `boolean`       | `true`  | Show thumbnails                      |
| `fullWidth`         | `boolean`       | `false` | iFrame PDF with full width in window |
| `positionPlacement` | `top`, `bottom` | `top`   | Position of bar control              |
| `showTitle`         | `boolean`       | `false` | Show title of image or PDF           |
| ...                 | ...             |         | ...                                  |

## Features

- Zoom
- Draggable
- Rotate
- Thumbnails
- Navigation
- Image Viewer
- PDF Viewer

## Contributing

Contributions, issues and feature requests are welcome. Feel free to check [issues page](https://github.com/deesouza/galleryfy/issues).

## License

Copyright © 2023 [Diego Souza](https://github.com/deesouza).
This project is [MIT](./LICENSE) licensed.
