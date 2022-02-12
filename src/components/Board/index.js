import React from "react";
import Square from "../Square";

const Board = () => {
  return (
    <div data-testid="board-container" id="board-container">
      <Square />
    </div>
  );
};

export default Board;
