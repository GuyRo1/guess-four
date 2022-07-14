import './displayStatus.scss'
import { useMemo } from 'react';
import { Status } from '../../types/types';
import Check from './Check/Check';
import Cross from './Cross/Cross';

type Props = { status: Status }

const DisplayStatus = ({ status }: Props) => {

    const StatusComponent = useMemo(() => {
        switch (status) {
            case 'win':
                return Check
            case 'lose':
                return Cross
            default:
                return () => <></>
        }
    }, [status])

    const wrapperClass = useMemo(() =>
        status === 'pending' ? 'status-wrapper' : 'invisible status-wrapper'
        , [status])

    return (
        <div className={wrapperClass}>
            <StatusComponent />
        </div>
    )



}

export default DisplayStatus;