import React from "react";
import { useGameContext } from "../../contexts/GameContext";
import Square from "../Square";

const Board = () => {
  const { grid} = useGameContext();

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
