import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function TimerCounters(props){

    const unit = props.unit
    const timeFromStore = unit == 'seconds' ? useSelector(state => state.timer.seconds) : useSelector(state => state.timer.minutes)
    // const time = timeFromStore < 10 ? '0' + timeFromStore.toString() : timeFromStore.toString()
    const isOver = useSelector(state => state.counter.isOver)
    const dispatch = useDispatch()
    const counter = (e) => {unit == 'minutes' ? dispatch({type: 'counterMinutes', payload: e.target.value}) : dispatch({type: 'counterSeconds', payload: e.target.value})}
    // const counter = (e) => console.log(e.target.value)
    


    return(
        <div className={'ml-4 text-lg grid grid-cols-2 ' + (!isOver ? "text-gray-500" : "")}>
            <span className='mr-2 cursor-default'>{unit == 'seconds' ? 'Sekundy' : 'Minuty'}</span>
            <div>
                <button value='plus' onClick={isOver ? counter : null} className={'mr-4 font-bold rounded-full w-8 h-8 font-mono focus:outline-none ' + (!isOver ? "cursor-default" : 'hover:bg-gray-400')}>+</button>
                <button value='minus' onClick={isOver ? counter : null} className={'font-bold rounded-full font-mono w-8 h-8 focus:outline-none ' + (!isOver ? "cursor-default" : 'hover:bg-gray-400')}>-</button> 
            </div>
        </div>
    )
}