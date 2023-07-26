import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { ControlBar } from ".";
import { ControlBarProps } from "./types";

describe("<ControlBar />", () => {
  const props: ControlBarProps = {
    amount: 10,
    current: 1,
    handleClose: vi.fn(),
    handleRotate: vi.fn(),
    handleZoom: vi.fn(),
  };

  it("should render component", () => {
    render(<ControlBar {...props} />);

    expect(screen.getByText(/2 de 10/i)).toBeInTheDocument();
  });

  it("should handle close function", async () => {
    render(<ControlBar {...props} />);
    await userEvent.click(screen.getByTitle(/fechar/i));

    expect(props.handleClose).toHaveBeenCalled();
  });

  it("should handle zoom minus function", async () => {
    render(<ControlBar {...props} />);
    await userEvent.click(screen.getByTitle(/menos zoom$/i));

    expect(props.handleZoom).toHaveBeenCalled();
  });

  it("should handle zoom plus function", async () => {
    render(<ControlBar {...props} />);
    await userEvent.click(screen.getByTitle(/mais zoom$/i));

    expect(props.handleZoom).toHaveBeenCalled();
  });

  it("should handle rotate function", async () => {
    render(<ControlBar {...props} />);
    await userEvent.click(screen.getByTitle(/rotacionar$/i));

    expect(props.handleRotate).toHaveBeenCalled();
  });

  it("should handle rotate anticlockwise function", async () => {
    render(<ControlBar {...props} />);
    await userEvent.click(screen.getByTitle(/rotacionar anti-horário$/i));

    expect(props.handleRotate).toHaveBeenCalled();
  });
});
