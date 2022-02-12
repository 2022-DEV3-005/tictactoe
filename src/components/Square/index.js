import { shape, number, string } from "prop-types";

import { useGameContext } from "../../contexts/GameContext";

const Square = ({ square: { owner, position } }) => {
  const { grid, setGrid, selectedPlayer, gameStatus } = useGameContext();

  //Set in the grid a new value : the owner of the selected square
  const handleSelect = () => {
    if (!owner) {
      const gridMap = new Map(grid);
      gridMap.set(position, { position, owner: selectedPlayer });
      setGrid(gridMap);
    }
  };

  return (
    <button
      data-testid="square"
      className="square"
      onClick={handleSelect}
      disabled={gameStatus}
    >
      {owner}
    </button>
  );
};

Square.propTypes = {
  square: shape({
    position: number.isRequired,
    owner: string,
  }).isRequired,
};

export default Square;
