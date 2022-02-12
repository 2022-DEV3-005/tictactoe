import { render, screen } from '@testing-library/react';
import Game from '.';

test("should render Game view", () => {
  render(<Game />);
  expect(screen.getByTestId(/^game-container/)).toBeInTheDocument();
});
