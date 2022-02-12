import { render } from "@testing-library/react";
import { GameContextProvider } from "../contexts/GameContext";

/**
 * A custom render to setup providers. Extends regular
 */
const customRender = (ui) => {
  return render(<GameContextProvider>{ui}</GameContextProvider>);
};

export { customRender as render };
