import { useState } from "react";

export default function Player({ playerName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(playerName);
  // const [playerSymbol]
  function handleEditing() {
    setIsEditing((cl) => !cl);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player ">
        {isEditing ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
