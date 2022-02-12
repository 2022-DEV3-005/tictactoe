import { render, screen } from "@testing-library/react";
import Game from ".";

describe("Game", () => {
  test("Should render Game view with Tic Tac Toe title", () => {
    render(<Game />);
    expect(screen.getByTestId(/^game-container/)).toBeInTheDocument();
    expect(screen.getByTestId(/^game-title/)).toBeInTheDocument();
    const title = screen.getByText(/Tic Tac Toe/i);
    expect(title).toBeInTheDocument();
  });
});
