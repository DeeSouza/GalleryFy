import { Direction, ZoomKind } from '../../hooks/useControl/types';
export interface ControlBarProps {
    amount: number;
    current: number;
    handleClose(): void;
    handleRotate(direction: Direction): void;
    handleZoom(type: ZoomKind): void;
    positionPlacement?: "top" | "bottom";
}
