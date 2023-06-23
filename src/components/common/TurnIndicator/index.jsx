/**
 * @file Contains `TurnIndicator` React stateful component.
 * @module TurnIndicator
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// » IMPORT COMPONENTS
import Player from './Player';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The players in the game.
 *
 * @typedef  {object} Players
 * @property {string} X       - The symbol for player X.
 * @property {string} O       - The symbol for player O.
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `TurnIndicator` stateful component.
 *
 * @component
 * @param {object} props - The component's properties.
 * @param {Players} props.players - The players in the game (X and O).
 * @param {string} props.currentPlayer - The symbol of the current player.
 * @returns {JSX.Element} The rendered component.
 */
const TurnIndicator = ({ players, currentPlayer }) => (
  <section className="turn-indicator">
    <Player player={players.X} isCurrentPlayer={players.X === currentPlayer} />
    <Player player={players.O} isCurrentPlayer={players.O === currentPlayer} />
  </section>
);

TurnIndicator.propTypes = {
  players: PropTypes.shape({
    X: PropTypes.string.isRequired,
    O: PropTypes.string.isRequired,
  }).isRequired,
  currentPlayer: PropTypes.string.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TurnIndicator;
