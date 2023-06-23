/**
 * @file Contains `TicTacToeGame` class for managing the localStorage API.
 *
 * @description This module provides a class that simplifies the usage of the
 * localStorage API. It allows you to easily store, retrieve, and remove data
 * from the browser's local storage using a specified key.
 *
 * The `TicTacToeGame` class handles common operations and error handling,
 * providing a convenient interface for working with local storage.
 *
 * @module TicTacToeGame
 */

// ━━	IMPORT MODULES	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT LOCAL MODULES
import { GAME_STATUS, PLAYERS, INITIAL_BOARD } from '../constants';
import GameStateManager from './GameStateManager';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The current game status.
 *
 * @typedef {'NOT_STARTED'|'STARTED'|'GAME_WON'|'GAME_TIED'} GameStatus
 */

/**
 * Represents a square on the game board.
 *
 * @typedef {string|null} Square
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
 * The current game board.
 *
 * @typedef {Array.<Square>} Board
 */

/**
 * Represents the game state.
 *
 * @typedef  {object}     GameState
 * @property {GameStatus} gameStatus    - The game status.
 * @property {string}     currentPlayer - The current player.
 * @property {Board}      board         - The game board state.
 * @property {Winner}     winner        - The winner player.
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The winning combinations for Tic Tac Toe.
 *
 * @type {number[][]}
 */
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The class `TicTacToeGame` manages the state of a Tic Tac Toe game.
 *
 * @classdesc This class manages the state of the Tic Tac Toe game, including
 * the game status, current player, and the state of the game board.
 *
 * It provides methods to load and save the game state, reset the game, check
 * for a winner, and determine if the game has finished.
 *
 * @augments GameStateManager
 * @class TicTacToeGame
 */
class TicTacToeGame extends GameStateManager {
  /**
   * Creates an instance of TicTacToeGame.
   *
   * @constructor
   * @example
   * ```js
   * const ticTacToeGame = new TicTacToeGame();
   * ```
   */
  constructor() {
    super('TicTacToeGame', {
      gameStatus: GAME_STATUS.NOT_STARTED,
      currentPlayer: PLAYERS.X,
      board: INITIAL_BOARD,
      winner: null,
    });
  }

  /**
   * Gets the current game status.
   *
   * @member {GameStatus} gameStatus
   * @memberof TicTacToeGame
   * @instance
   * @example
   * ```js
   * const gameStatus = ticTacToeGame.gameStatus;
   * console.log(gameStatus); // 'NOT_STARTED'
   *```
   */
  get gameStatus() {
    return this.get().gameStatus;
  }

  /**
   * Gets the symbol of the current player.
   *
   * @member {string} currentPlayer
   * @memberof TicTacToeGame
   * @instance
   * @example
   * ```js
   * const currentPlayer = ticTacToeGame.currentPlayer;
   * console.log(currentPlayer); // 'X'
   *```
   */
  get currentPlayer() {
    return this.get().currentPlayer;
  }

  /**
   * Gets the current game board state.
   *
   * @member {Board} board
   * @memberof TicTacToeGame
   * @instance
   * @example
   * ```js
   * const board = ticTacToeGame.board;
   * console.log(board); // ['X', null, 'O', null, 'X', null, null, null, null]
   *```
   */
  get board() {
    return this.get().board;
  }

  /**
   * Gets the current winner player.
   *
   * @member {Winner} winner
   * @memberof TicTacToeGame
   * @instance
   * @example
   * ```js
   * const winner = ticTacToeGame.winner;
   * console.log(winner); // false
   *```
   */
  get winner() {
    return this.get().winner;
  }

  /**
   * Loads the saved game state from the local storage.
   *
   * @memberof TicTacToeGame
   * @returns {GameState} The game state retrieved from local storage.
   * @example
   * ```js
   * const gameState = ticTacToeGame.loadState();
   * console.log(gameState); // { gameStatus: 'IN_PROGRESS', currentPlayer: 'O', board: ['X', null, 'O', null, 'X', null, null, null, null] }
   *```
   */
  loadState() {
    const gameState = this.get();
    return gameState;
  }

  /**
   * Saves the game state to the local storage.
   *
   * @memberof TicTacToeGame
   * @param {GameState} updatedState - The current game state to be saved.
   * @returns {void}
   * @example
   * ```js
   * ticTacToeGame.saveState({
   *   gameStatus: GAME_STATUS.WON,
   *   currentPlayer: PLAYERS.O,
   *   board: ['X', 'O', 'X', 'O', 'O', 'X', null, null, null],
   * });
   *```
   */
  saveState(updatedState) {
    this.set({
      gameStatus: updatedState.gameStatus,
      currentPlayer: updatedState.currentPlayer,
      board: updatedState.board,
      winner: updatedState.winner,
    });
  }

  /**
   * Resets the game state in the local storage by removing the corresponding
   * items.
   *
   * @memberof TicTacToeGame
   * @returns {void}
   * @example
   * ```js
   * ticTacToeGame.resetState();
   *```
   */
  resetState() {
    this.remove();
  }

  /**
   * Checks if there is a winner based on the current board state.
   *
   * @static
   * @memberof TicTacToeGame
   * @param {string[]} board - The current board state.
   * @returns {string|false} The symbol of the winner, or `false` if there is no winner.
   * @example
   * ```js
   * const board = ['X', 'X', 'X', null, null, null, null, null, null];
   * const winner = TicTacToeGame.checkWinner(board);
   * console.log(winner); // 'X'
   *```
   */
  static checkWinner(board) {
    const WINNING_COMBINATION = WINNING_COMBINATIONS.find(combination => {
      const [a, b, c] = combination;
      return board[a] && board[a] === board[b] && board[a] === board[c];
    });

    const WINNER = WINNING_COMBINATION ? board[WINNING_COMBINATION[0]] : null;

    return WINNING_COMBINATION ? WINNER : false;
  }

  /**
   * Checks if the game has finished (either won or tied) based on the current board state.
   *
   * @static
   * @memberof TicTacToeGame
   * @param {string[]} board - The current board state.
   * @returns {boolean} True if the game is finished, false otherwise.
   * @example
   * ```js
   * const board = ['X', 'O', 'X', 'O', 'O', 'X', 'X', 'X', 'O'];
   * const isFinished = TicTacToeGame.isGameFinished(board);
   * console.log(isFinished); // true
   *```
   */
  static isGameFinished(board) {
    return board.every(square => square !== null);
  }
}
// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TicTacToeGame;
