/**
 * @file Contains `constants` react application.
 *
 * @module constants
 */

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The symbols for the players in the game.
 *
 * @typedef  {object} Players
 * @property {string} X       - The symbol for player X.
 * @property {string} O       - The symbol for player O.
 */

/**
 * The possible game status values.
 *
 * @typedef  {object} GameStatus
 * @property {string} NOT_STARTED - The game has not started yet.
 * @property {string} STARTED     - The game is in progress.
 * @property {string} GAME_WON    - The game has been won by a player.
 * @property {string} GAME_TIED   - The game ended in a tie.
 */

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The initial game board, represented as an array of 9 null values.
 *
 * @type {Array.<null>}
 */
const INITIAL_BOARD = Array(9).fill(null);

/**
 * The symbols for the players in the game.
 *
 * @readonly
 * @type {Players}
 */
const PLAYERS = Object.freeze({
  X: '❌',
  O: '⚪',
});

/**
 * The possible game status values.
 * @readonly
 * @type {GameStatus}
 */
const GAME_STATUS = Object.freeze({
  NOT_STARTED: 'NOT_STARTED',
  STARTED: 'STARTED',
  GAME_WON: 'GAME_WON',
  GAME_TIED: 'GAME_TIED',
});

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { INITIAL_BOARD };
export { PLAYERS };
export { GAME_STATUS };
