import React from "react";
import { screen } from "@testing-library/react";
import Board from ".";
import { render } from "../../utils/test-utils";

describe("Board", () => {
  test("should render a Board", () => {
    render(<Board />);
    expect(screen.getByTestId(/^board-container/)).toBeInTheDocument();
  });
});
