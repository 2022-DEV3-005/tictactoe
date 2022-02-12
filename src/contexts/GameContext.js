/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from "react";
import { node } from "prop-types";

//GameContext
const GameContext = createContext();

//GameContext Consumer
export function useGameContext() {
  return useContext(GameContext);
}

//GameContext Provider
export function GameContextProvider({ children }) {
  const [grid, setGrid] = useState();

  // Initializing the Game once after the mounting 
  useEffect(() => {
    initialiseGame();
  }, []);

  /** 
   *   - gridMap : is Map object that contains an array of 9 elements where each element is stored in the same order as inserted as 
   *               a Key / value => *   index / {position}  [0] [1] [2] [3] [4] [5] [6] [7] [8] 
   */
  const initialiseGame = () => {
    const gridMap = new Map(grid);
    [...Array(9)].forEach((_, index) => {
      gridMap.set(index, { position: index });
    });
    setGrid(gridMap);
  };

  const value = {
    grid,
    setGrid,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

GameContext.propTypes = {
  children: node,
};
