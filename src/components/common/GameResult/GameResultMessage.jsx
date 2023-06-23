/**
 * @file Contains `GameResultMessage` React stateful component.
 * @module GameResultMessage
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';
import { PropTypes } from 'prop-types';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The function to reset the game state.
 *
 * @typedef {'NOT_STARTED'|'STARTED'|'GAME_WON'|'GAME_TIED'} GameStatus
 */

/**
 * The current winner status of game.
 *
 * The symbol of the winning player, `null` if the game is still ongoing,
 * or `false` if the game ended in a tie.
 *
 * @typedef {null|false|string} Winner
 */

/**
 * The function to reset the game state.
 *
 * @typedef {() => void} ResetGame
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const GAME_STATUS = {
  GAME_WON: 'GAME_WON',
  GAME_TIED: 'GAME_TIED',
};

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `GameResultMessage` stateful component.
 *
 * @component
 * @param {object} props - The component's properties.
 * @param {GameStatus} props.gameStatus - The current state of the board.
 * @param {Winner} props.winner - The function to update the game state.
 * @returns {JSX.Element} The rendered component.
 */
const GameResultMessage = ({ gameStatus, winner }) => {
  if (gameStatus === GAME_STATUS.GAME_WON) {
    return (
      <React.Fragment key={GAME_STATUS.GAME_WON}>
        <span className="game-result__icon">🏆</span>
        <p>Player {winner} wins!</p>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment key={GAME_STATUS.GAME_TIED}>
      <span className="game-result__icon">🤝🏽</span>
      <p>The game ended in a tie.</p>
    </React.Fragment>
  );
};

GameResultMessage.propTypes = {
  gameStatus: PropTypes.string.isRequired,
  winner: PropTypes.string,
};

GameResultMessage.defaultProps = {
  winner: null,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default GameResultMessage;
