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
        {current + 1} de {amount}
      </div>

      <Buttons>
        <button
          type="button"
          title="Rotacionar anti-horário"
          onClick={() => handleRotate("anticlockwise")}
        >
          <ArrowCounterClockwise size={20} color="#FFFFFF" />
        </button>

        <button
          type="button"
          title="Rotacionar"
          onClick={() => handleRotate("clockwise")}
        >
          <ArrowClockwise size={20} color="#FFFFFF" />
        </button>

        <button type="button" title="Menos Zoom">
          <MagnifyingGlassMinus size={20} color="#FFFFFF" />
        </button>

        <button type="button" title="Mais Zoom">
          <MagnifyingGlassPlus size={20} color="#FFFFFF" />
        </button>

        <button type="button" title="Fechar" onClick={handleClose}>
          <XCircle size={20} color="#FFFFFF" />
        </button>
      </Buttons>
    </Container>
  );
};
