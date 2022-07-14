import './displayStatus.scss'
import { useMemo } from 'react';
import { Status } from '../../types/types';
import Check from './Check/Check';
import Cross from './Cross/Cross';

type Props = { 
    className: string, 
    status: Status 
}

const DisplayStatus = ({ className, status }: Props) => {
    const StatusComponent = useMemo(() => {
        switch (status) {
            case 'win':
                return Check
            case 'lose':
                return Cross
            default:
                return ()=>null
        }
    }, [status])

    const wrapperClass = useMemo(() =>{
        const base = className
        const calculate = status === 'pending' ? 'invisible status-wrapper' : `${status} status-wrapper`
        return (base+' '+calculate).trim();
    }, [status])

    return (
        <div className={wrapperClass}>
            <StatusComponent />
        </div>
    )
}

export default DisplayStatus;