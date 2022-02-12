import React from "react";
import { screen } from "@testing-library/react";

import Board from ".";
import { render } from "../../utils/test-utils";

describe("Board", () => {
  test("should render a Board", () => {
    render(<Board />);
    expect(screen.getByTestId(/^board-container/)).toBeInTheDocument();
  });

  test("should display a grid of 9 squares", () => {
    render(<Board />);
    const squares = screen.queryAllByTestId("square");
    expect(squares.length).toBe(9);
  });
});
