function getExtensionFile(src: string) {
  const splittedLink = src.split("/");
  const filename = splittedLink[splittedLink.length - 1];
  const splittedFilename = filename.split(".");
  const extensionFile =
    splittedFilename[splittedFilename.length - 1].toLowerCase();

  return extensionFile;
}

function formatDataSource(data: string[]) {
  return data.map((item) => {
    return {
      src: item,
      type: getExtensionFile(item),
    };
  });
}

export { formatDataSource };
