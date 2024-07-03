import React from "react";
import { GalleryFyProps } from "./types";
/**
 * @component
 * @param {array} dataSource - from URL's files or path assets files
 * @param {number} startIn - file index default
 * @param {boolean} open - control open/close gallery
 * @param {function} handleClose - to close gallery
 * @param {boolean} showThumbs - show thumbs in the gallery
 * @param {string} positionPlacement - position of the control buttons
 * @param {boolean} showTitle - shown title from file
 * @param {boolean} fullWidth - full width iframe
 * @returns {JSX.Element} The rendered gallery component.
 *
 * @example
 * // Render a gallery
 * <GalleryFy
      open={open}
      dataSource={dataSource}
      startIn={openInImage}
      handleClose={() => setOpen(false)}
      positionPlacement="bottom"
    />
 */
declare const GalleryFy: React.FunctionComponent<GalleryFyProps>;
export default GalleryFy;
