import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/player.jsx";
import Log from "./components/Log.jsx";

function App() {
  const [active, setActive] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleActive(rowIndex, colIndex) {
    setActive((curSy) => (curSy === "O" ? "X" : "O"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player playerName="Player 1" symbol="O" isActive={active === "O"} />
          <Player playerName="Player 2" symbol="X" isActive={active === "X"} />
        </ol>
        <GameBoard onActive={handleActive} turns={gameTurns} />
      </div>
      <Log />
    </main>
  );
}

export default App;
