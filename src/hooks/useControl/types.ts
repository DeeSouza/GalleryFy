export interface UseControlProps {
  handleRotate(direction: Direction): void;
  handleZoom(type: ZoomKind): void;
  handleReset(): void;
}

export enum ZoomKind {
  IN = "IN",
  OUT = "OUT",
  NORMAL = "NORMAL",
}

export enum Direction {
  CLOCKWISE = "CLOCKWISE",
  ANTICLOCKWISE = "ANTICLOCKWISE",
}

export interface PositionMouse {
  x: number;
  y: number;
}
