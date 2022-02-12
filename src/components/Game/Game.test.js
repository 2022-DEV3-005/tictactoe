import { screen, fireEvent } from "@testing-library/react";

import { render } from "../../utils/test-utils";
import Game from ".";

describe("Game", () => {
  test("Should render Game view with title", () => {
    render(<Game />);
    expect(screen.getByTestId(/^game-container/)).toBeInTheDocument();
    expect(screen.getByTestId(/^game-title/)).toBeInTheDocument();
    const title = screen.getByText(/Tic Tac Toe/i);
    expect(title).toBeInTheDocument();
  });

  test("X always goes first", () => {
    render(<Game />);
    const squares = screen.queryAllByTestId("square");
    expect(screen.getByTestId("selected-player").textContent).toBe(
      "Selected Player: X"
    );
    fireEvent.click(squares[0]);
    expect(squares[0].textContent).toBe("X");
  });
});
