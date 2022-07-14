
import { memo } from 'react'
import './WinModal.scss'

type Props = { nextGame: () => void }


const WinModal = ({nextGame}:Props) => {
    return (
        <div className="backdrop">
            <div className="content">
                <h1> Congratulations! </h1>
                <h2>You won the game!</h2>
                <button onClick={nextGame} className='button'>Start new game</button>
            </div>
        </div>
    )
}

export default memo(WinModal)