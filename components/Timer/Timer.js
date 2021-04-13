import React from 'react'
import {connect} from 'react-redux'
import store from '../../redux/reducer'

// function countdown(){
//         setInterval(() => {store.dispatch({type: 'countdownTimer'})}, 1000)
// }

class Timer extends React.Component {

    componentDidUpdate(prevProps){
        if (this.props.seconds !== prevProps.seconds || this.props.minutes !== prevProps.minutes){
            if(this.props.minutes == 0 && this.props.seconds == 0 && this.props.isOver == false){
                store.dispatch({type: 'resetTimer'})
                store.dispatch({type: 'showNext'})
                console.log("resetuje")
            }
        }
    }

    render(){

        const minutes = this.props.minutes < 10 ? '0' + this.props.minutes.toString() : this.props.minutes.toString()
        const seconds = this.props.seconds < 10 ? '0' + this.props.seconds.toString() : this.props.seconds.toString()

        return(
            <div className="lg:row-start-1 lg:row-end-2 lg:col-start-10 lg:col-end-12 shadow-md rounded box-border h-auto bg-green-50 grid place-items-center">
                <div className='flex flex-col place-items-center text-3xl'>
                    <h1>Pozostały czas: </h1>
                    <span>{minutes} : {seconds}</span>
                    {/* <button onClick={countdown}>test</button> */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        minutes: state.timer.minutes,
        seconds: state.timer.seconds,
        isOver: state.counter.isOver,
        lastRound: state.counter.lastRound
    }
}

export default connect(mapStateToProps)(Timer)