import { useEffect, useMemo, useReducer } from "react";
import { ActionKind, ActionProps, InitialStateProps, Props } from "./types";

const initialState: InitialStateProps = {
  selectedImage: 0,
};

function reducer(state: InitialStateProps, action: ActionProps) {
  if (action.type === ActionKind.CHANGE) {
    return {
      selectedImage: action.selectedImage,
    };
  }

  return state;
}

export const useGallery = ({ images, selectedImage = 0 }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    handleChange(selectedImage);
  }, [selectedImage]);

  function handleChange(selectedImage: number) {
    dispatch({
      type: ActionKind.CHANGE,
      selectedImage,
    });
  }

  function handleChangeNext() {
    dispatch({
      type: ActionKind.CHANGE,
      selectedImage: state.selectedImage + 1,
    });
  }

  function handleChangePrev() {
    dispatch({
      type: ActionKind.CHANGE,
      selectedImage: state.selectedImage - 1,
    });
  }

  const isFirstImage = useMemo(() => {
    return state.selectedImage === 0;
  }, [state.selectedImage]);

  const isLastImage = useMemo(() => {
    return state.selectedImage === images.length - 1;
  }, [state.selectedImage, images.length]);

  return {
    isFirstImage,
    isLastImage,
    handleChange,
    handleChangeNext,
    handleChangePrev,
    currentImage: state.selectedImage,
    amountImages: images.length,
  };
};
