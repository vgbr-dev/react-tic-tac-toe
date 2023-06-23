/**
 * @file Contains `useTicTacToe` custom React hook, for the Tic Tac Toe game.
 * @module useTicTacToe
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useMemo, useState } from 'react';

// » IMPORT LOCAL MODULES
import TicTacToeGame from '../services/TicTacToeGame';

// » IMPORT CONSTANTS
import { GAME_STATUS, INITIAL_BOARD, PLAYERS } from '../constants';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The players in the game.
 *
 * @typedef  {object} Players
 * @property {string} X       - The symbol for player X.
 * @property {string} O       - The symbol for player O.
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

/**
 * The function to reset the game state.
 *
 * @typedef {() => void} ResetGame
 */

/**
 * The useLocalStorage hook return value.
 *
 * @typedef  {object}     TicTacToeHook
 * @property {Players}    players       - The available players (X and O).
 * @property {GameStatus} gameStatus    - The current game status.
 * @property {Winner}     winner        - The symbol of the winning player or `null` if there is no winner.
 * @property {Board}      board         - The current game board.
 * @property {UpdateGame} updateGame    - The function to update the game state.
 * @property {ResetGame}  resetGame     - The function to reset the game state.
 */

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useTicTacToe` custom hook for managing the Tic Tac Toe game state.
 *
 * @hook
 * @returns {TicTacToeHook} An object containing game state and functions to manage the game.
 * @example const { players, gameStatus, winner, currentPlayer, board, updateGame, resetGame } = useTicTacToe();

 */
const useTicTacToe = () => {
  const gameState = useMemo(() => new TicTacToeGame(), []);
  const [gameStatus, setGameStatus] = useState(gameState.gameStatus);
  const [currentPlayer, setCurrentPlayer] = useState(gameState.currentPlayer);
  const [board, setBoard] = useState(gameState.board);
  const [winner, setWinner] = useState(gameState.winner);

  /**
   * Updates the game board based on the user's move.
   *
   * @private
   * @param {number} index - The index of the square where the user made the move.
   * @returns {Array} The updated game board.
   * @example
   * ```js
   * const handleClick = index => {
   *   updateBoard(index);
   * };
   * ```
   */
  const updateBoard = index => {
    const updatedBoard = [...board].map((item, idx) => (idx === index ? currentPlayer : item));
    setBoard(updatedBoard);
    return updatedBoard;
  };

  /**
   * Updates the current player after a move is made.
   *
   * @private
   * @returns {string} The updated current player symbol ('X' or 'O').
   * @example
   * ```js
   * const updatedPlayer = updateCurrentPlayer();
   * ```
   */
  const updateCurrentPlayer = () => {
    const updatedCurrentPlayer = currentPlayer === PLAYERS.X ? PLAYERS.O : PLAYERS.X;
    setCurrentPlayer(updatedCurrentPlayer);
    return updatedCurrentPlayer;
  };

  /**
   * Updates the current winner based on the updated game board.
   *
   * @private
   * @param {Board} updatedBoard - The updated game board.
   * @returns {Winner} The updated winner symbol ('X', 'O'), `null` if the game is still ongoing, or `false` if the game ended in a tie.
   * @example
   * ```js
   * const updatedWinner = updateWinner(updatedBoard);
   * ```
   */
  const updateWinner = updatedBoard => {
    const checkWinner = TicTacToeGame.checkWinner(updatedBoard);
    if (checkWinner) {
      const updatedWinner = checkWinner;
      setWinner(updatedWinner);
      return updatedWinner;
    }
    if (TicTacToeGame.isGameFinished(updatedBoard)) {
      const updatedWinner = false;
      setWinner(updatedWinner);
      return updatedWinner;
    }
    return winner;
  };

  /**
   * Updates the current game status based on the updated game board.
   *
   * @private
   * @param {Board} updatedBoard - The updated game board.
   * @returns {GameStatus} The updated game status.
   * @example
   * ```js
   * const updatedGameStatus = updateGameStatus(updatedBoard);
   * ```
   */
  const updateGameStatus = updatedBoard => {
    const checkWinner = TicTacToeGame.checkWinner(updatedBoard);
    if (checkWinner) {
      const updatedGameStatus = GAME_STATUS.GAME_WON;
      setGameStatus(updatedGameStatus);
      return updatedGameStatus;
    }
    if (TicTacToeGame.isGameFinished(updatedBoard)) {
      const updatedGameStatus = GAME_STATUS.GAME_TIED;
      setGameStatus(updatedGameStatus);
      return updatedGameStatus;
    }
    return gameStatus;
  };

  /**
   * Updates the game state based on the user's move.
   *
   * @param {number} index - The index of the square where the user made the move.
   * @example
   * ```js
   * const handleClick = index => {
   *   updateGame(index);
   * };
   * ```
   */
  const updateGame = index => {
    if (board[index]) return;
    if (winner) return;
    if (gameStatus === GAME_STATUS.NOT_STARTED) {
      setGameStatus(GAME_STATUS.STARTED);
    }
    const updatedBoard = updateBoard(index);
    const updatedCurrentPlayer = updateCurrentPlayer();
    const updatedWinner = updateWinner(updatedBoard);
    const updatedGameStatus = updateGameStatus(updatedBoard);

    gameState.saveState({
      gameStatus: updatedGameStatus,
      board: updatedBoard,
      currentPlayer: updatedCurrentPlayer,
      winner: updatedWinner,
    });
  };

  /**
   * Resets the game to the initial state.
   *
   * @returns {void}
   * @example
   * ```js
   * const handleClick = () => {
   *   resetGame();
   * };
   * ```
   */
  const resetGame = () => {
    setGameStatus(GAME_STATUS.NOT_STARTED);
    setWinner(null);
    setBoard([...INITIAL_BOARD]);
    setCurrentPlayer(PLAYERS.X);
    gameState.resetState();
  };

  return {
    players: PLAYERS,
    gameStatus,
    currentPlayer,
    winner,
    board,
    updateGame,
    resetGame,
  };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useTicTacToe;
