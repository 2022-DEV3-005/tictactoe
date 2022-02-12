import React from "react";

import Square from "../Square";
import { useGameContext } from "../../contexts/GameContext";

const Board = () => {
  const { grid } = useGameContext();

  const renderGrid = () => {
    return [...grid.entries()].map(([squareIndex, square]) => (
      <Square key={squareIndex} square={square} />
    ));
  };
  return (
    <div data-testid="board-container" id="board-container">
      {grid && renderGrid()}
    </div>
  );
};

export default Board;
