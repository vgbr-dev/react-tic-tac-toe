/**
 * @file Contains `Square` React stateful component.
 * @module Square
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The function to update the game state.
 *
 * @typedef {(index: number) => void} UpdateGame
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Square` stateful component.
 *
 * @component
 * @param {object} props - The component's properties.
 * @param {ReactNode|null} props.children - The content of the square (symbol).
 * @param {number} props.index - The index of the square in the board.
 * @param {UpdateGame} props.updateGame - The function to update the game state.
 * @returns {JSX.Element} The rendered component.
 */
const Square = ({ children, index, updateGame }) => {
  const handleClick = () => {
    updateGame(index);
  };

  return (
    <button type="button" className="game-board__square" onClick={handleClick}>
      {children}
    </button>
  );
};

Square.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  updateGame: PropTypes.func.isRequired,
};

Square.defaultProps = {
  children: null,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Square;
