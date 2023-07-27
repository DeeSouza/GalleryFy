import { DataSource } from "@components/Thumbs/types";

function formatDataSource(dataSource: string[]): DataSource[] {
  return dataSource.map((data) => {
    const splitFileName = data.split(".");
    const extensionsFile =
      splitFileName[splitFileName.length - 1].toLowerCase();
    const isPdfFile = extensionsFile === "pdf";
    const extension = isPdfFile ? "pdf" : "image";

    return {
      src: data,
      ext: extension,
      iframe: isPdfFile,
    };
  });
}

export { formatDataSource };
