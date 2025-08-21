// import { useState } from "react";

export default function GameBoard({ onActive, board }) {
  return (
    <ol id="game-board">
      {board.map((row, indRow) => (
        <li key={indRow}>
          <ol>
            {row.map((playerSymbol, indCol) => (
              <li key={indCol}>
                <button
                  onClick={() => onActive(indRow, indCol)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
