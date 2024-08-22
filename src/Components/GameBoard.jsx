export default function GameBoard({ onSelectSquare, board }) {
  return (
    <div className="game-board">
      <ul>
        {board.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ul>
              {row.map((col, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={col !== null}>{col}</button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
