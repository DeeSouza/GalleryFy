export interface ControlBarProps {
  amount: number;
  current: number;
  handleClose(): void;
  handleRotate(direction: string): void;
}
