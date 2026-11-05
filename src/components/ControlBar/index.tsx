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

import { Container, Buttons } from "./styles";
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
  return (
    <Container $positionPlacement={positionPlacement}>
      <div>
        {current + 1} de {amount}
      </div>

      <Buttons>
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
      </Buttons>
    </Container>
  );
};
