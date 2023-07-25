import {
  MagnifyingGlassPlus,
  MagnifyingGlassMinus,
  XCircle,
  ArrowCounterClockwise,
  ArrowClockwise,
} from "phosphor-react";

import { Container, Buttons } from "./styles";
import { ControlBarProps } from "./types";

export const ControlBar = ({
  amount,
  current,
  handleClose,
  handleRotate,
}: ControlBarProps) => {
  return (
    <Container>
      <div>
        {current + 1}/{amount}
      </div>

      <Buttons>
        <button type="button" onClick={() => handleRotate("anticlockwise")}>
          <ArrowCounterClockwise size={20} color="#FFFFFF" />
        </button>

        <button type="button" onClick={() => handleRotate("clockwise")}>
          <ArrowClockwise size={20} color="#FFFFFF" />
        </button>

        <button type="button">
          <MagnifyingGlassMinus size={20} color="#FFFFFF" />
        </button>

        <button type="button">
          <MagnifyingGlassPlus size={20} color="#FFFFFF" />
        </button>

        <button type="button" onClick={handleClose}>
          <XCircle size={20} color="#FFFFFF" />
        </button>
      </Buttons>
    </Container>
  );
};
