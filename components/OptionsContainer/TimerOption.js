import Toggle from './toggle'
import { useSelector } from 'react-redux'
import TimerCounters from './TimerCounters'

export default function TimerOption(){
    const isTimerOn = useSelector(state => state.isTimerOn)
    console.log(useSelector(state => state.time.seconds))

    return(
        <div>
            <div className='flex flex-row content-center'>
                <span className="mr-2 text-lg">Gra ze stoperem</span>
                <Toggle/>
            </div>
            {isTimerOn ? 
                <div>
                    <TimerCounters unit='seconds'/>
                    <TimerCounters unit='minutes'/>
                </div>  
            : null}
        </div>
    )
}