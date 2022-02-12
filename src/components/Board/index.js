import React from "react";

import Square from "../Square";
import { useGameContext } from "../../contexts/GameContext";

const Board = () => {
  const { grid, gameStatus, initialiseGame } = useGameContext();

  const renderGrid = () => {
    return [...grid.entries()].map(([squareIndex, square]) => (
      <Square key={squareIndex} square={square} />
    ));
  };
  return (
    <div data-testid="board-container" id="board-container">
      {grid && renderGrid()}
      {gameStatus && (
        <button
          data-testid="retry-btn"
          className="retry-button"
          onClick={initialiseGame}
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default Board;
