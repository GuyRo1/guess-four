import React, { useEffect, useState } from 'react';
import './GuessFour.css';
import Question from '../Question/Question';
import Options from '../Options/Options';
import { getNewAnswer, questionEqualsAnswer } from '../../utils/utils';

type Status = 'game' | 'win' | 'lose'

function GuessFour() {


    const [answer, setAnswer] = useState<number[]>(getNewAnswer())
    const [question, setQuestion] = useState<number[]>([])
    const [status, setStatus] = useState<Status>('game')

    const updateQuestion = (input: number) => {
        setQuestion((prevAnswer: number[]) => prevAnswer.concat(input))
    }

    useEffect(() => {
        if (question.length > 0)
            console.log(question);

        if (question.length === 4) {
            const result: boolean = questionEqualsAnswer(question, answer)
            console.log('--------');
            console.log(`Your guess : ${question}`);
            console.log(`The answer : ${answer}`);
            console.log('--------');

            const newStatus: Status = result ? 'win' : 'lose';
            setStatus(newStatus)
        }
    }, [answer, question])

    useEffect(() => {
        if (status !== 'game') {
            console.log(`you ${status}`);
            setAnswer(getNewAnswer());
            setQuestion([]);
            setStatus('game');
        }
    }, [status])


    return (
        <div className="guess-four">
            <Question question={question}/>
            <Options update={updateQuestion} />
        </div>
    );
}

export default GuessFour;
