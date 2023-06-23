/**
 * @file Contains `GameStartButton` React stateful component.
 * @module GameStartButton
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `GameStartButton` stateful component.
 *
 * @component
 * @param {object} props - The component's properties.
 * @param {ResetGame} props.onClick - The function to start the game again.
 * @returns {JSX.Element} The rendered component.
 */
const GameStartButton = ({ onClick }) => (
  <button type="button" className="game-start-button" onClick={onClick}>
    Start Again
  </button>
);

GameStartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default GameStartButton;
