import Board from "../Board";

function Game() {
  return (
    <div data-testid="game-container" id="game-container">
      <h1 data-testid="game-title">Tic Tac Toe</h1>
      <Board />
    </div>
  );
}

export default Game;
