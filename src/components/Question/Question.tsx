
import { sectionsMold } from '../../constants/constants';
import './Question.scss'
import Section from './Section/Section';

type Props = { 
    question: number[], 
    progress: boolean[] 
}

const Question = ({ question, progress }: Props) => {
    return (
        <div className="question">
            {
                sectionsMold.map((_, index: number) =>
                    <Section
                        status={progress[index]}
                        key={index}
                        guess={question[index]}
                        active={index === question.length}
                        className={`section ${index % 2 === 0 ? 'left' : 'right'}`} />
                )
            }
        </div>
    )
}

export default Question;