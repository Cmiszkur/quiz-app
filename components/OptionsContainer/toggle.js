import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

export default function Toggle() {

    const dispatch = useDispatch()
    const checked = useSelector(state => state.isTimerOn)

    return (
        <label className='p-1'>
            <div  className='w-10 h-6 p-1 hover:shadow-xl cursor-pointer bg-gray-500 rounded-full flex flex-row'>
                <input 
                    type="checkbox" 
                    className="toggle sr-only"
                    defaultChecked={checked}
                    onChange={() => dispatch({ type: "toggleOption"})}
                >
                </input>
                <div className='dot w-4 h-4 bg-gray-50 rounded-full transition'></div>
            </div>
        </label>
        
    )
}