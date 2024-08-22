import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName }) {
  const [playerName, setPlayerName] = useState(name);
  const [action, setAction] = useState(false);
  function handleClick() {
    setAction((editing) => !editing);
    if (action) {
      onChangeName( symbol, playerName );
    }
  }
  function handleChange(event) {
    setPlayerName(event.target.value);
  }
  return (
    <li className={isActive ? "active" : ""}>
      <div className="player">
        <span className="player-name">
          {action ? (
            <input
              type="text"
              value={playerName}
              onChange={handleChange}
              required
            />
          ) : (
            playerName
          )}
        </span>
        <span className="player-symbol">{symbol}</span>
      </div>
      <button onClick={handleClick}>{action ? "Save" : "Edit"}</button>
    </li>
  );
}
