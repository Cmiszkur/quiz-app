import React from 'react'
import TimerOption from './TimerOption'

class OptionsContainer extends React.Component {
    render(){
        return(
            <div className='lg:row-start-2 lg:row-end-3 lg:col-start-10 lg:col-end-12 p-3 shadow-md rounded box-border h-auto bg-green-50'>
                <TimerOption/>
            </div>
        )
    }
}

export default OptionsContainer