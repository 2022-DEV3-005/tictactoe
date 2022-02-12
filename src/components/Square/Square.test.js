import { screen } from "@testing-library/react";

import { render } from "../../utils/test-utils";
import Square from ".";

test("display one Square", () => {
  const square = {
    owner: "",
    position: 0,
  };
  render(<Square square={square} />);
  expect(screen.getByTestId("square")).toBeInTheDocument();
});
