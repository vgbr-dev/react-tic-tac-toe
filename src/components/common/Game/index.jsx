/**
 * @file Contains `Game` React stateless component.
 * @module Game
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT CUSTOM HOOKS
import useTicTacToe from '../../../hooks/useTicTacToe';

// » IMPORT COMPONENTS
import Board from '../Board';
import GameResult from '../GameResult';
import TurnIndicator from '../TurnIndicator';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Game` stateless component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Game = () => {
  const { players, gameStatus, winner, currentPlayer, board, updateGame, resetGame } =
    useTicTacToe();

  return (
    <main className="game">
      <Board board={board} updateGame={updateGame} />
      <TurnIndicator players={players} currentPlayer={currentPlayer} />
      <GameResult gameStatus={gameStatus} winner={winner} resetGame={resetGame} />
    </main>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Game;
