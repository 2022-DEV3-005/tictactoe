import { shape, number, bool, string } from "prop-types";

import { useGameContext } from "../../contexts/GameContext";

const Square = ({ square: { owner, position } }) => {
  const { grid, selectedPlayer, setGrid } = useGameContext();

  //Set in the grid a new value : the owner of the selected square
  const handleSelect = () => {
    if (!owner) {
      const gridMap = new Map(grid);
      gridMap.set(position, { position, owner: selectedPlayer });
      setGrid(gridMap);
    }
  };

  return (
    <button data-testid="square" className="square" onClick={handleSelect}>
      {owner}
    </button>
  );
};

Square.propTypes = {
  square: shape({
    position: number.isRequired,
    owner: string,
    hasWinningPosition: bool,
  }).isRequired,
};

export default Square;
