import { useCallback, useEffect, useMemo, useReducer } from "react";
import { formatDataSource } from "@utils/globals";
import {
  ActionKind,
  ActionProps,
  InitialStateProps,
  Props,
  UseGalleryProps,
} from "./types";

const initialState: InitialStateProps = {
  startIn: 0,
};

function reducer(state: InitialStateProps, action: ActionProps) {
  if (action.type === ActionKind.CHANGE) {
    return {
      startIn: action.startIn,
    };
  }

  return state;
}

export const useGallery = ({ dataSource, startIn }: Props): UseGalleryProps => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const formattedDataSource = formatDataSource(dataSource);

  const handleChange = useCallback((startIn: number) => {
    dispatch({
      type: ActionKind.CHANGE,
      startIn,
    });
  }, []);

  const handleChangeNext = useCallback(() => {
    const goToIndex = state.startIn + 1;

    if (goToIndex === dataSource.length) {
      return;
    }

    dispatch({
      type: ActionKind.CHANGE,
      startIn: state.startIn + 1,
    });
  }, [state.startIn, dataSource.length]);

  const handleChangePrev = useCallback(() => {
    const goToIndex = state.startIn - 1;

    if (goToIndex === -1) {
      return;
    }

    dispatch({
      type: ActionKind.CHANGE,
      startIn: state.startIn - 1,
    });
  }, [state.startIn]);

  const isFirstIndex = useMemo(() => {
    return state.startIn === 0;
  }, [state.startIn]);

  const isLastIndex = useMemo(() => {
    return state.startIn === dataSource.length - 1;
  }, [state.startIn, dataSource.length]);

  useEffect(() => {
    if (startIn === undefined) {
      return handleChange(0);
    }

    handleChange(startIn);
  }, [startIn, handleChange]);

  return {
    isFirstIndex,
    isLastIndex,
    handleChange,
    handleChangeNext,
    handleChangePrev,
    current: state.startIn,
    amountData: dataSource.length,
    dataGallery: formattedDataSource,
  };
};
