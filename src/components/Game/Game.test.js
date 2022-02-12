import { screen, fireEvent, waitFor } from "@testing-library/react";

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
  test("Switch players", () => {
    render(<Game />);
    const squares = screen.queryAllByTestId("square");
    fireEvent.click(squares[0]);
    fireEvent.click(squares[1]);
    expect(squares[0].textContent).toBe("X");
    expect(squares[1].textContent).toBe("O");
  });

  test("should be immutable if played, cannot play on a played position", () => {
    render(<Game />);
    const squares = screen.queryAllByTestId("square");
    fireEvent.click(squares[0]);
    fireEvent.click(squares[0]);
    expect(squares[0].textContent).toBe("X");
  });

  test("X as winner", async () => {
    render(<Game />);
    const squares = screen.queryAllByTestId("square");
    [8, 7, 5, 4, 2].forEach((x) => fireEvent.click(squares[x]));
    await waitFor(
      () => {
        expect(screen.getByTestId("status").textContent).toBe(
          "Game Over: The winner is X"
        );
      },
      1000,
      50
    );
  });

  test("O as winner", async () => {
    render(<Game />);
    const squares = screen.queryAllByTestId("square");
    [8, 7, 5, 4, 6, 1].forEach((x) => fireEvent.click(squares[x]));
    await waitFor(
      () => {
        expect(screen.getByTestId("status").textContent).toBe(
          "Game Over: The winner is O"
        );
      },
      1000,
      50
    );
  });
});
