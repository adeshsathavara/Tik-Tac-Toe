export default function GameOver({ winner, onRestart }) {
  return (
    <div className="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} won the game!</p>}
      {!winner && <p>It's a draw!</p>}
      <button onClick={onRestart}>Rematch!</button>
    </div>
  );
}
