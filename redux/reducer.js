import { createStore } from 'redux'

const initialState = {
    counter: {
        counter: 1,
        isOver: false,
        lastRound: false
    },
    quizSets: [],
    currentSet: {},
    isCorrect: [],
    questionHistory: [],
    timer: {
        minutes: 0,
        seconds: 0,
        timeOver: false
    },
    time: {
        minutes: 0,
        seconds: 0,
        timeOver: false
    }
}

const maxValue = (counter) => {
    let maxCounter = 2
    if (maxCounter > counter.counter) {
        return {
            counter: counter.counter + 1,
            isOver: false,
            lastRound: false
        }
    }
    else if (!counter.lastRound) {
        return {
            counter: counter.counter,
            lastRound: true,
            isOver: false
        }
    }
    else {
        return {
            counter: counter.counter,
            lastRound: true,
            isOver: true
        }
    }
}

const counterMinutes = (unit, symbol) => {
    let minUnit = 0
    let maxUnit = 55
    if(symbol == "plus") {
        return unit.minutes < maxUnit ? unit.minutes + 1 : unit.minutes
    }else{
        return unit.minutes > minUnit ? unit.minutes - 1 : unit.minutes
    }
}

const counterSeconds = (unit, symbol) => {
    let minUnit = 0
    let maxUnit = 55
    if(symbol == "plus") {
        return unit.seconds < maxUnit ? {seconds: unit.seconds + 5, minutes: unit.minutes} : {seconds: 0, minutes: unit.minutes + 1}
    }else{
        return unit.seconds > minUnit ? {seconds: unit.seconds - 5, minutes: unit.minutes} : unit
    }
}

const countdown = (timer) => {
    let seconds = timer.seconds
    let minutes = timer.minutes
    let over = timer.timeOver
    if(minutes <= 0) {
            return seconds > 0 ? {...timer, seconds: seconds - 1} : {...timer, over: !over}
    }
    else if(minutes > 0) {
        if(seconds > 0 ) {
            return seconds > 0 ? {...timer, seconds: seconds - 1} : {...timer, minutes: minutes - 1}
        }else {
            return {...timer, minutes: minutes - 1, seconds: 59}
        }
    }
}

function quizReducer(state = initialState, action) {
    switch(action.type) {
        case('showNext'):
            return {
                ...state,
                counter: maxValue(state.counter),
                questionHistory: state.questionHistory.concat(state.currentSet),
                currentSet: state.quizSets[state.counter.counter]
            }
        case('populate'):
            return {
                ...state,
                quizSets: action.payload,
                currentSet: action.payload[0],
                counter: initialState.counter,
                isCorrect: initialState.isCorrect,
                questionHistory: []
            }
        case('checkAnswer'):
            return {
                ...state,
                isCorrect: state.isCorrect.concat(action.payload)
            }
        case('toggleOption'):
            return {
                ...state,
                isTimerOn: !state.isTimerOn,
            }
        case('counterMinutes'):
            return {
                ...state,
                timer: {
                    ...state.timer,
                    minutes: counterMinutes(state.timer, action.payload)
                },
                time: {
                    ...state.time,
                    minutes: counterMinutes(state.time, action.payload)
                }
            }
        case('counterSeconds'):
            return {
                ...state,
                timer: counterSeconds(state.timer, action.payload),
                time: counterSeconds(state.time, action.payload)
               
            }
        case('resetTimer'):
            return {
                ...state,
                timer: state.time
            }
        case('countdownTimer'):
            return {
                ...state,
                timer: countdown(state.timer)
            }
        default:
            return state
    }
}

const store = createStore(quizReducer)

export default store