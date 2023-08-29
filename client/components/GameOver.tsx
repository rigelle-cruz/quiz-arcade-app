interface GameOverProps {
  score: number
}

function GameOver({ score }: GameOverProps) {
  return (
    <div>
      <h2>Game Over!</h2>
      <p>Your Final Score: {score}</p>
      {/* ADD ADDITIONAL BUTTONS, ETC. */}
    </div>
  )
}

export default GameOver
