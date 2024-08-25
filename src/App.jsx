import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Player from "./component/Player";
import Log from "./component/Log";
import { WINNING_COMBINATIONS } from "./component/WinningCombination";
import GameOver from "./component/GameOver";
const InitialgameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
function App() {
  const [activePlayer, setActivePlayer] = useState("X"); // Active player state
  const [gameTurns, setGameTurns] = useState([]); // State to track game turns

  let gameBoard = [...InitialgameBoard.map(array => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]

    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner
  const handleSelectPlayer = (rowIndex, colIndex) => {
    // Add the current move to the list of game turns
    setGameTurns((prevTurns) => {
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });

    // Switch active player after a move
    setActivePlayer((prevActivePlayer) =>
      prevActivePlayer === "X" ? "O" : "X"
    );
  };

  function handleRstart() {
    setGameTurns([])
  }
  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName={"Player 1"} symbol="X" isActive={activePlayer === "X"} />
        <Player initialName={"Player 2"} symbol="O" isActive={activePlayer === "O"} />
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} onReStart={handleRstart} />}
      <GameBoard
        onSelectPlayer={handleSelectPlayer}
        activePlayerSymbol={activePlayer}
        board={gameBoard}
      />
      <Log turns={gameTurns} />
    </div>
  );
}

export default App;
