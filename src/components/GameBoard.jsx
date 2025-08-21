// import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onActive, isActive }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // function handleGameBoard(indRow, indCol) {
  //   setGameBoard((gameBoard) => {
  //     const updatedBoard = [...gameBoard.map((innerArr) => [...innerArr])];
  //     updatedBoard[indRow][indCol] = isActive;
  //     return updatedBoard;
  //   });
  //   onActive();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, indRow) => (
        <li key={indRow}>
          <ol>
            {row.map((playerSymbol, indCol) => (
              <li key={indCol}>
                <button onClick={onActive}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
