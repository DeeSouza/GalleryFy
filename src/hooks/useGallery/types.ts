import { DataSource, Thumb } from "@components/GalleryFy/types";

export interface UseGalleryProps {
  isFirstIndex: boolean;
  isLastIndex: boolean;
  handleChange(index: number): void;
  handleChangeNext(): void;
  handleChangePrev(): void;
  current: number;
  amountData: number;
  dataGallery: Thumb[];
}

export enum ActionKind {
  CHANGE = "CHANGE",
}

export interface Props {
  dataSource: DataSource[];
  startIn?: number;
}

export interface InitialStateProps {
  startIn: number;
}

export interface ActionProps {
  type: ActionKind;
  startIn: number;
}
