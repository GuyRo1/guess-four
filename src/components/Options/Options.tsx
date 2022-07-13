import React from 'react'
import './Options.css'

type Props = {
    update: (input: number) => void
}

const Options = ({ update }: Props) => {

    return (
        <div className="options">
            <div className='option' onClick={()=>{update(1)}}>1</div>
            <div className='option' onClick={()=>{update(2)}}>2</div>
            <div className='option' onClick={()=>{update(3)}}>3</div>
            <div className='option' onClick={()=>{update(4)}}>4</div>
            <div className='option' onClick={()=>{update(5)}}>5</div>
            <div className='option' onClick={()=>{update(6)}}>6</div>
            <div className='option' onClick={()=>{update(7)}}>7</div>
            <div className='option' onClick={()=>{update(8)}}>8</div>
            <div className='option' onClick={()=>{update(9)}}>9</div>
        </div>
    )
}

export default Options;