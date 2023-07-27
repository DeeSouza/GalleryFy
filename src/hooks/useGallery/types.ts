export interface DataSource {
  src: string;
  ext: string;
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
