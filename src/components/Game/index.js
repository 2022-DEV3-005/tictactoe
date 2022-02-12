import Board from "../Board";
import { useGameContext } from "../../contexts/GameContext";

function Game() {
  const { selectedPlayer } = useGameContext();
  return (
    <div data-testid="game-container" id="game-container">
      <h1 data-testid="game-title">Tic Tac Toe</h1>
      <h2
        data-testid="selected-player"
        className="selected-player"
      >{`Selected Player: ${selectedPlayer}`}</h2>
      <Board />
    </div>
  );
}

export default Game;
