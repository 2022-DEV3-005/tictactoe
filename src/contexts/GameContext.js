/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext } from "react";
import { node } from "prop-types";

const GameContext = createContext();

export function useGameContext() {
  return useContext(GameContext);
}

export function GameContextProvider({ children }) {
  const value = {};

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

GameContext.propTypes = {
  children: node,
};
