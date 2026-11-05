import {
  MagnifyingGlassPlus,
  MagnifyingGlassMinus,
  XCircle,
  ArrowCounterClockwise,
  ArrowClockwise,
  ArrowsIn,
  ArrowDown,
} from "phosphor-react";

import { Direction, ZoomKind } from "@hooks/useControl/types";

import styles from "./styles.module.scss";
import { ControlBarProps } from "./types";

export const ControlBar: React.FunctionComponent<ControlBarProps> = ({
  amount,
  current,
  handleClose,
  handleRotate,
  handleZoom,
  handleDownload,
  positionPlacement,
  isDownload,
}: ControlBarProps) => {
  const containerClassName = [
    styles.container,
    positionPlacement === "bottom" ? styles.bottom : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClassName}>
      <div>
        {current + 1} de {amount}
      </div>

      <div className={styles.buttons}>
        {isDownload && (
          <button
            type="button"
            title="Download"
            onClick={() => handleDownload()}
          >
            <ArrowDown size={20} color="#FFFFFF" />
          </button>
        )}

        <button
          type="button"
          title="Rotacionar anti-horário"
          onClick={() => handleRotate(Direction.ANTICLOCKWISE)}
        >
          <ArrowCounterClockwise size={20} color="#FFFFFF" />
        </button>

        <button
          type="button"
          title="Rotacionar"
          onClick={() => handleRotate(Direction.CLOCKWISE)}
        >
          <ArrowClockwise size={20} color="#FFFFFF" />
        </button>

        <button
          type="button"
          title="Tamanho normal"
          onClick={() => handleZoom(ZoomKind.NORMAL)}
        >
          <ArrowsIn size={20} color="#FFFFFF" />
        </button>

        <button
          type="button"
          title="Menos Zoom"
          onClick={() => handleZoom(ZoomKind.OUT)}
        >
          <MagnifyingGlassMinus size={20} color="#FFFFFF" />
        </button>

        <button
          type="button"
          title="Mais Zoom"
          onClick={() => handleZoom(ZoomKind.IN)}
        >
          <MagnifyingGlassPlus size={20} color="#FFFFFF" />
        </button>

        <button type="button" title="Fechar" onClick={handleClose}>
          <XCircle size={20} color="#FFFFFF" />
        </button>
      </div>
    </div>
  );
};
