/**
 * @file Contains `Board` React stateful component.
 * @module Board
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { Children } from 'react';
import { PropTypes } from 'prop-types';

// » IMPORT COMPONENTS
import Square from './Square';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Represents a square on the game board.
 *
 * @typedef {string|null} Square
 */

/**
 * The current game board.
 *
 * @typedef {Array.<Square>} Board
 */

/**
 * The function to update the game state.
 *
 * @typedef {(index: number) => void} UpdateGame
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Board` stateful component.
 *
 * @component
 * @param {object} props - The component's properties.
 * @param {Board} props.board - The current state of the board.
 * @param {UpdateGame} props.updateGame - The function to update the game state.
 * @returns {JSX.Element} The rendered component.
 */
const Board = ({ board, updateGame }) => (
  <section className="game-board">
    {Children.toArray(
      board.map((square, index) => (
        <Square index={index} updateGame={updateGame}>
          {square}
        </Square>
      )),
    )}
  </section>
);

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateGame: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Board;
