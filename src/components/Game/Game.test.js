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
          "Game Over: The winner is X 💪"
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
          "Game Over: The winner is O 💪"
        );
      },
      1000,
      50
    );
  });

  /**  [0*, 1*, 2*]
   *   [3 , 4 , 5 ]
   *   [6 , 7,  8 ]
   */
  test("player O win after mark 3 squares in first row", async () => {
    render(<Game />);
    const squares = screen.queryAllByTestId("square");
    [3, 0, 4, 1, 6, 2].forEach((x) => fireEvent.click(squares[x]));
    expect(screen.getByTestId("status").textContent).toBe(
      "Game Over: The winner is O 💪"
    );
    const retryBtn = screen.getByTestId(/^retry-btn/);
    expect(retryBtn).toBeInTheDocument();
  });

  /**  [0 , 1 , 2 ]
   *   [3*, 4*, 5*]
   *   [6 , 7 , 8 ]
   */
  test("player X win after mark 3 squares in second row", async () => {
    render(<Game />);
    const squares = screen.queryAllByTestId("square");
    [3, 0, 4, 1, 5].forEach((x) => fireEvent.click(squares[x]));
    expect(screen.getByTestId("status").textContent).toBe(
      "Game Over: The winner is X 💪"
    );
    const retryBtn = screen.getByTestId(/^retry-btn/);
    expect(retryBtn).toBeInTheDocument();
  });

  /**  [0 , 1 , 2 ]
   *   [3 , 4 , 5 ]
   *   [6*, 7*, 8*]
   */
  test("player O win after mark 3 squares in third row", async () => {
    render(<Game />);
    const squares = screen.queryAllByTestId("square");
    [3, 6, 4, 7, 0, 8].forEach((x) => fireEvent.click(squares[x]));
    expect(screen.getByTestId("status").textContent).toBe(
      "Game Over: The winner is O 💪"
    );
    const retryBtn = screen.getByTestId(/^retry-btn/);
    expect(retryBtn).toBeInTheDocument();
  });

  /**  [0*, 1, 2]
   *   [3*, 4, 5]
   *   [6*, 7, 8]
   */
  test("player X win after mark 3 squares in first column", async () => {
    render(<Game />);
    const squares = screen.queryAllByTestId("square");
    [0, 1, 3, 4, 6].forEach((x) => fireEvent.click(squares[x]));
    expect(screen.getByTestId("status").textContent).toBe(
      "Game Over: The winner is X 💪"
    );
    const retryBtn = screen.getByTestId(/^retry-btn/);
    expect(retryBtn).toBeInTheDocument();
  });

  /**  [0, 1*, 2]
   *   [3, 4*, 5]
   *   [6, 7*, 8]
   */
  test("player O win after mark 3 squares in second column", async () => {
    render(<Game />);
    const squares = screen.queryAllByTestId("square");
    [0, 1, 3, 4, 8, 7].forEach((x) => fireEvent.click(squares[x]));
    expect(screen.getByTestId("status").textContent).toBe(
      "Game Over: The winner is O 💪"
    );
    const retryBtn = screen.getByTestId(/^retry-btn/);
    expect(retryBtn).toBeInTheDocument();
  });

  /**  [0, 1, 2*]
   *   [3, 4, 5*]
   *   [6, 7, 8*]
   */
  test("player X win after mark 3 squares in third column", async () => {
    render(<Game />);
    const squares = screen.queryAllByTestId("square");
    [2, 1, 5, 4, 8].forEach((x) => fireEvent.click(squares[x]));
    expect(screen.getByTestId("status").textContent).toBe(
      "Game Over: The winner is X 💪"
    );
    const retryBtn = screen.getByTestId(/^retry-btn/);
    expect(retryBtn).toBeInTheDocument();
  });

  /**  [0*, 1, 2]
   *   [3, 4*, 5]
   *   [6, 7, 8*]
   */
  test("player X win after mark 3 squares in first diagonal", async () => {
    render(<Game />);
    const squares = screen.queryAllByTestId("square");
    [0, 1, 4, 2, 8].forEach((x) => fireEvent.click(squares[x]));
    expect(screen.getByTestId("status").textContent).toBe(
      "Game Over: The winner is X 💪"
    );
    const retryBtn = screen.getByTestId(/^retry-btn/);
    expect(retryBtn).toBeInTheDocument();
  });

  /**  [0, 1, 2*]
   *   [3, 4*, 5]
   *   [6*, 7, 8]
   */
  test("player O win after mark 3 squares in second diagonal", async () => {
    render(<Game />);
    const squares = screen.queryAllByTestId("square");
    [0, 2, 1, 4, 3, 6].forEach((x) => fireEvent.click(squares[x]));
    expect(screen.getByTestId("status").textContent).toBe(
      "Game Over: The winner is O 💪"
    );
    const retryBtn = screen.getByTestId(/^retry-btn/);
    expect(retryBtn).toBeInTheDocument();
  });

  test("All nine squares are filled, the game is a draw", async () => {
    render(<Game />);
    const squares = screen.queryAllByTestId("square");
    [8, 5, 2, 1, 0, 4, 3, 6, 7].forEach((x) => fireEvent.click(squares[x]));
    expect(screen.getByTestId("status").textContent).toBe(
      "Game Over: no more move"
    );
    const retryBtn = screen.getByTestId(/^retry-btn/);
    fireEvent.click(retryBtn);
    expect(squares.length).toBe(9);
    for (let i = 0; i < 9; i++) {
      expect(squares[i].textContent).toBe("");
    }
  });
});
