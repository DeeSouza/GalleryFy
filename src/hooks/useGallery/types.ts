export enum ActionKind {
  CHANGE = "CHANGE",
}

export interface Props {
  images: string[];
  selectedImage?: number;
}

export interface InitialStateProps {
  selectedImage: number;
}

export interface ActionProps {
  type: ActionKind;
  selectedImage: number;
}
