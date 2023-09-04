import { useNavigate } from 'react-router-dom'

function GameOver() {
  const navigate = useNavigate()
  function goTo(link: string) {
    navigate(link)
  }

  return (
    <div className="full-screen">
      <div className="game-over">
        <h1 className="game-over">Game Over!</h1>
        <button className="play-again-button" onClick={() => goTo('/')}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default GameOver
