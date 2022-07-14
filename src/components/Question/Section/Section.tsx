import { useMemo } from "react";
import DisplayStatus from "../../DisplayStatus/DisplayStatus";

type Props = { status: boolean, guess: number | null, active: boolean, className: string }

const Section = ({ status, guess, active, className }: Props) => {


    const displayGuess = useMemo(() =>
        guess ? guess.toString() : '?'
        , [guess])

    const sectionStatus = useMemo(() =>
        status !== undefined ? (status ? 'win' : 'lose') : 'pending'
        , [status])

    const sectionClass = useMemo(() => {
        const special: 'none' | 'active' | 'error' | 'success' =
            active ? 'active' :
                sectionStatus === 'win' ? 'success' :
                    sectionStatus === 'lose' ? 'error' : 'none';

        return `${className} ${special}`
    }, [className, active, sectionStatus])



    return (
        <div className={sectionClass}>
            {displayGuess}
            <DisplayStatus status={sectionStatus} />
        </div>
    )
}

export default Section;