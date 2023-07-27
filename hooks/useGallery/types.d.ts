export interface UseGalleryProps {
    isFirstIndex: boolean;
    isLastIndex: boolean;
    handleChange(index: number): void;
    handleChangeNext(): void;
    handleChangePrev(): void;
    current: number;
    amountData: number;
}
export interface DataSource {
    src: string;
    ext: string;
}
export declare enum ActionKind {
    CHANGE = "CHANGE"
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
