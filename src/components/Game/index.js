import Board from "../Board";
import { GAME_STATUS, useGameContext } from "../../contexts/GameContext";

function Game() {
  const { selectedPlayer, gameStatus } = useGameContext();
  return (
    <div data-testid="game-container" id="game-container">
      <h1 data-testid="game-title">Tic Tac Toe</h1>
      <h2
        data-testid="selected-player"
        className={gameStatus ? "game-over" : "selected-player"}
      >{`Selected Player: ${selectedPlayer}`}</h2>
      <h3 data-testid="status" className="status">
        {gameStatus === GAME_STATUS.GAME_OVER
          ? `Game Over: The winner is ${selectedPlayer} 💪`
          : ""}
      </h3>
      <Board />
    </div>
  );
}

export default Game;
