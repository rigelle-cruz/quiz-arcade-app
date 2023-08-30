import { useNavigate } from 'react-router-dom'

function GameOver() {
  const navigate = useNavigate()
  function goTo(link: string) {
    navigate(link)
  }

  return (
    <div>
      <h2>Game Over!</h2>
      <button onClick={() => goTo('/')}>Play Again</button>
    </div>
  )
}

export default GameOver
