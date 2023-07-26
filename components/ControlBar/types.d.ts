import { ZoomKind } from "../../hooks/useControl/types";
export interface ControlBarProps {
    amount: number;
    current: number;
    handleClose(): void;
    handleRotate(direction: string): void;
    handleZoom(type: ZoomKind): void;
}
