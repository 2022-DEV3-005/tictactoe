import React from "react";
import { render, screen } from "@testing-library/react";

import Board from ".";

describe("Board", () => {
  test("should render a Board", () => {
    render(<Board />);
    expect(screen.getByTestId(/^board-container/)).toBeInTheDocument();
  });
});
