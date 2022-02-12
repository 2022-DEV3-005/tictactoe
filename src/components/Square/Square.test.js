import React from "react";
import { render, screen } from "@testing-library/react";
import Square from ".";

test("display one Square", () => {
  render(<Square />);
  expect(screen.getByTestId("square")).toBeInTheDocument();
});
