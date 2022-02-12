import { screen } from "@testing-library/react";

import { render } from "../../utils/test-utils";
import Square from ".";

test("display one Square", () => {
  render(<Square />);
  expect(screen.getByTestId("square")).toBeInTheDocument();
});
