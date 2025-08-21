import { useState } from "react";
import GameBoard from "./components/GameBoard.jsx";
import Player from "./components/player.jsx";
import Log from "./components/Log.jsx";

function switchPlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  // const [active, setActive] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  const active = switchPlayer(gameTurns);
  function handleActive(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      let currentPlayer = switchPlayer(prevTurns);
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
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
