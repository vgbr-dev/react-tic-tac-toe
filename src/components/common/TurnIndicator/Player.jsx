/**
 * @file Contains `Player` React stateful component.
 * @module Player
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Turns` stateful component.
 *
 * @component
 * @param {object} props - The component's properties.
 * @param {string} props.player - The player symbol (X or O).
 * @param {boolean} props.isCurrentPlayer - Indicates if it's the current player's turn.
 * @returns {JSX.Element} The rendered component.
 */
const Player = ({ player, isCurrentPlayer }) => {
  const className = isCurrentPlayer
    ? 'turn-indicator__player turn-indicator__player--active'
    : 'turn-indicator__player';

  return <div className={className}>{player}</div>;
};

Player.propTypes = {
  player: PropTypes.string.isRequired,
  isCurrentPlayer: PropTypes.bool.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Player;
