import { screen } from "@testing-library/react";

import Square from ".";
import { render } from "../../utils/test-utils";

describe("Square", () => {
  test("display one Square", () => {
    const square = {
      owner: "",
      position: 0,
    };
    render(<Square square={square} />);
    expect(screen.getByTestId("square")).toBeInTheDocument();
  });
});
