import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import Game from "./components/Game";
import "./styles/index.scss";
import { GameContextProvider } from "./contexts/GameContext";

ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider>
      <Game />
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
