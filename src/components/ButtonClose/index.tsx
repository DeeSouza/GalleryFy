import { XCircle } from "phosphor-react";

import { Container } from "./styles";
import { ButtonCloseProps } from "./types";

export function ButtonClose({ handleClose }: ButtonCloseProps) {
  return (
    <Container onClick={handleClose}>
      <XCircle size={32} color="#FFFFFF" />
    </Container>
  );
}
