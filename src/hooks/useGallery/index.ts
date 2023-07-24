import { useMemo, useReducer } from "react";
import { ActionKind, ActionProps, InitialStateProps } from "./types";

const initialState: InitialStateProps = {
  indexImage: 0,
};

function reducerImage(state: InitialStateProps, action: ActionProps) {
  if (action.type === ActionKind.CHANGE) {
    return {
      indexImage: action.selectedImage,
    };
  }

  return state;
}

export const useGallery = (images: string[]) => {
  const [state, dispatch] = useReducer(reducerImage, initialState);

  function handleChange(selectedImage: number) {
    dispatch({
      type: ActionKind.CHANGE,
      selectedImage,
    });
  }

  function handleChangeNext() {
    dispatch({
      type: ActionKind.CHANGE,
      selectedImage: state.indexImage + 1,
    });
  }

  function handleChangePrev() {
    dispatch({
      type: ActionKind.CHANGE,
      selectedImage: state.indexImage - 1,
    });
  }

  const checkFirstImage = useMemo(() => {
    return state.indexImage === 0;
  }, [state.indexImage]);

  const checkLastImage = useMemo(() => {
    return state.indexImage === images.length - 1;
  }, [state.indexImage, images.length]);

  return {
    checkFirstImage,
    checkLastImage,
    handleChange,
    handleChangeNext,
    handleChangePrev,
    state,
  };
};
