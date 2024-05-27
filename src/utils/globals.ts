import { DataSource } from "@components/GalleryFy/types";

function getExtensionFile(src: string) {
  const splittedLink = src.split("/");
  const filename = splittedLink[splittedLink.length - 1];
  const splittedFilename = filename.split(".");
  const extensionFile =
    splittedFilename[splittedFilename.length - 1].toLowerCase();

  return extensionFile;
}

function formatDataSource(data: DataSource[]) {
  return data.map((item) => {
    return {
      ...item,
      type: getExtensionFile(item.src),
    };
  });
}

export { formatDataSource };
