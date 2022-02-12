/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from "react";
import { node } from "prop-types";

//GameContext
const GameContext = createContext();

//GameContext Consumer
export function useGameContext() {
  return useContext(GameContext);
}

//Two Players X and O
export const PLAYER = {
  X: "X",
  O: "O",
};

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

//Game Status
export const GAME_STATUS = {
  GAME_OVER: "GAME_OVER",
};

//GameContext Provider
export function GameContextProvider({ children }) {
  const [grid, setGrid] = useState();
  const [selectedPlayer, setSelectedPlayer] = useState(PLAYER.X);
  const [gameStatus, setGameStatus] = useState();

  React.useEffect(() => {
    grid && gameStatus !== GAME_STATUS.GAME_OVER && checkGameStatus();
  }, [grid]);

  // Initializing the Game once after the mounting
  useEffect(() => {
    initialiseGame();
  }, []);

  /**
   *   - gridMap : is Map object that contains an array of 9 elements where each element is stored in the same order as inserted as
   *               a Key / value => *   index / {position} after we will [0] [1] [2] [3] [4] [5] [6] [7] [8]
   *
   *   - selectedPlayer : X always goes first at the start of the game
   */
  const initialiseGame = () => {
    const gridMap = new Map(grid);
    [...Array(9)].forEach((_, index) => {
      gridMap.set(index, { position: index });
    });
    setGrid(gridMap);
    setSelectedPlayer(PLAYER.X);
  };

  const switchPlayer = () => {
    const canSwitchPlayer = !![...grid.values()].find((square) => square.owner);
    if (canSwitchPlayer) {
      setSelectedPlayer(selectedPlayer === PLAYER.X ? PLAYER.O : PLAYER.X);
    }
  };

  const checkWinner = () => {
    for (const winningCombination of WINNING_COMBINATIONS) {
      let hasSameOwner = true;
      for (const position of winningCombination) {
        hasSameOwner =
          hasSameOwner && grid?.get(position)?.owner === selectedPlayer;
      }
      if (hasSameOwner) {
        const gridMap = new Map(grid);
        winningCombination.forEach((position) => {
          gridMap?.set(position, {
            position,
            owner: selectedPlayer,
            hasWinningPosition: true,
          });
        });
        setGameStatus(GAME_STATUS.GAME_OVER);
        setGrid(gridMap);
        return true;
      }
    }
    return false;
  };

  const checkGameStatus = () => {
    !checkWinner() && switchPlayer();
  };

  const value = {
    grid,
    setGrid,
    selectedPlayer,
    gameStatus,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

GameContext.propTypes = {
  children: node,
};
