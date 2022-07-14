import { useCallback, useEffect, useRef, useState } from 'react';
import './GuessFour.scss';
import Question from '../Question/Question';
import { getNewAnswer, questionEqualsAnswer } from '../../utils/utils';
import { options } from '../../constants/constants'
import { Status } from '../../types/types';


function GuessFour() {
    const counter = useRef<number>(0)
    const [answer, setAnswer] = useState<number[]>(getNewAnswer())
    const [question, setQuestion] = useState<number[]>([])
    const [status, setStatus] = useState<Status>('pending')
    const [guessProgress, setGuessProgress] =
        useState<boolean[]>([])

    const updateQuestion = useCallback((input: number) => {
        const tileStatus: boolean = answer[counter.current] === input
        setGuessProgress((prevAnswer: boolean[]) => prevAnswer.concat(tileStatus))
        setQuestion((prevAnswer: number[]) => prevAnswer.concat(input))
        counter.current++;
    }, [answer])

    const keyboardListener = useCallback((event: any) => {
        const key: string | number = event.key || event.keyCode;
        const guess: number = parseInt(key.toString())
        
        if (options.includes(guess)) {
            updateQuestion(guess)
        }
    }, [updateQuestion])


    useEffect(() => {
        window.addEventListener('keyup', keyboardListener)

        return () => {
            window.removeEventListener('keyup', keyboardListener)
        }
    }, [keyboardListener])

    useEffect(() => {
        if (question.length === 4) {
            setTimeout(() => {
                const result: boolean = questionEqualsAnswer(question, answer)
                const newStatus: Status = result ? 'win' : 'lose'
                setStatus(newStatus)
            }, 1000)
        }
    }, [answer, question])

    useEffect(() => {
        if (status !== 'pending') {
            setQuestion([]);
            setStatus('pending');
            counter.current = 0;
            setGuessProgress([]);

            if (status === 'win') {
                setAnswer(getNewAnswer())
            }
        }
    }, [status])


    return (
        <div className="guess-four">
            <Question question={question} progress={guessProgress} />
        </div>
    );
}

export default GuessFour;
