/**
 * @file Contains `GameResult` React stateful component.
 * @module GameResult
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

// » IMPORT COMPONENTS
import GameStartButton from './GameStartButton';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The possible game statuses.
 *
 * @typedef  {object} GameResultStatus
 * @property {string} GAME_WON         - The game status when a player wins.
 * @property {string} GAME_TIED        - The game status when the game ends in a tie.
 */

/**
 * The current game status.
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
/**
 * Enum for game result status. These states determine when the game result
 * should be displayed.
 *
 * @readonly
 * @type {GameResultStatus}
 */
const GAME_RESULT_STATUS = Object.freeze({
  GAME_WON: 'GAME_WON',
  GAME_TIED: 'GAME_TIED',
});

/**
 * The game statuses that should trigger the display of the game result modal.
 *
 * @type {Array.<string>}
 */
const SHOW_GAME_RESULT = Object.keys(GAME_RESULT_STATUS);

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `GameResultMessage` stateful component.
 *
 * @component
 * @param {object} props - The component's properties.
 * @param {GameStatus} props.gameStatus - The current game status.
 * @param {Winner} props.winner - The current winner status of game.
 * @returns {JSX.Element} The rendered component.
 */
const GameResultMessage = ({ gameStatus, winner }) => {
  if (gameStatus === GAME_RESULT_STATUS.GAME_WON) {
    return (
      <React.Fragment key={GAME_RESULT_STATUS.GAME_WON}>
        <span className="game-result__icon">🏆</span>
        <p>Player {winner} wins!</p>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment key={GAME_RESULT_STATUS.GAME_TIED}>
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

/**
 * The `GameResult` stateful component.
 *
 * @component
 * @param {object} props - The component's properties.
 * @param {GameStatus} props.gameStatus - The current game status.
 * @param {Winner} props.winner - The current winner status of game.
 * @param {ResetGame} props.resetGame - The function to reset the game state.
 * @returns {JSX.Element} The rendered component.
 */
const GameResult = ({ gameStatus, winner, resetGame }) => {
  const [showGameResult, setShowGameResult] = useState(SHOW_GAME_RESULT.includes(gameStatus));

  useEffect(() => {
    if (SHOW_GAME_RESULT.includes(gameStatus)) {
      setShowGameResult(true);
    }
  }, [gameStatus]);

  const handleClick = () => {
    setShowGameResult(false);
    resetGame();
  };

  if (!showGameResult) {
    return null;
  }

  return (
    <section className="game-result">
      <h1 className="game-result__title">GAME OVER</h1>
      <GameResultMessage gameStatus={gameStatus} winner={winner} />
      <GameStartButton onClick={handleClick} />
    </section>
  );
};

GameResult.propTypes = {
  gameStatus: PropTypes.oneOf(['NOT_STARTED', 'STARTED', 'GAME_WON', 'GAME_TIED']).isRequired,
  winner: PropTypes.string,
  resetGame: PropTypes.func.isRequired,
};

GameResult.defaultProps = {
  winner: null,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default GameResult;
