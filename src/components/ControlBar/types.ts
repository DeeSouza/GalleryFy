import { Direction, ZoomKind } from "@hooks/useControl/types";

export interface ControlBarProps {
  amount: number;
  current: number;
  positionPlacement?: "top" | "bottom";
  isDownload?: boolean;
  handleClose(): void;
  handleRotate(direction: Direction): void;
  handleZoom(type: ZoomKind): void;
  handleDownload(): void;
}
