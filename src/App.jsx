import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Player from "./component/Player";
import Log from "./component/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X"); // Changed to uppercase "X"

  const handleSelectPlayer = () => {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === "X" ? "O" : "X"
    );
    // console.log("Active Player:", activePlayer);
  };

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName={"Player 1"} symbol="X" isActive={activePlayer === "X"} />
        <Player initialName={"Player 2"} symbol="O" isActive={activePlayer === "O"} />
      </ol>
      <GameBoard onSelectPlayer={handleSelectPlayer} activePlayerSymbol={activePlayer} />
      <Log name={handleSelect} />
    </div>
  );
}

export default App;
