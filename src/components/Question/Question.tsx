import {useEffect} from 'react';
import './Question.css'

type Props = { question: number[] }

const Question = ({ question }: Props) => {



    return (
        <div className="question">
            <div className="section">{question[0] ? question[0] : '?'}</div>
            <div className="section">{question[1] ? question[1] : '?'}</div>
            <div className="section">{question[2] ? question[2] : '?'}</div>
            <div className="section">{question[3] ? question[3] : '?'}</div>
        </div>

    )
}

export default Question;