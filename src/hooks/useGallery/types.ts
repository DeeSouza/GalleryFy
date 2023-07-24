export enum ActionKind {
  CHANGE = "CHANGE",
}

export interface InitialStateProps {
  indexImage: number;
}

export interface ActionProps {
  type: ActionKind;
  selectedImage: number;
}
