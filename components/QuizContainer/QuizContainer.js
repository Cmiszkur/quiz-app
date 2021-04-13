import React from 'react'
import AnswerContainer from './AnswerContainer'
import QuizButton from './QuizButton'
import QuestionContainer from './QuestionContainer'
import {connect} from 'react-redux'
import store from '../../redux/reducer'

class QuizContainer extends React.Component {
    constructor(props){
        super(props)
        this.playAgain = this.playAgain.bind(this)
    }

    playAgain(){
        fetch('http://localhost:3080/questions')
        .then(response => response.json())
        .then(data => store.dispatch({type: 'populate', payload: data}))
        .then(() => this.props.isTimerOn ? this.interval() : null)
    }

    interval = () => this.test = setInterval(() => {store.dispatch({type: 'countdownTimer'})}, 1000)

    componentDidUpdate(prevProps){
        if (prevProps.isOver.isOver !== this.props.isOver.isOver){
            clearInterval(this.test)
            console.log("jestem debilem i nie umiem reacta")
        }
    }

    render(){
        const arrayOfCorrectAnswers = this.props.isCorrect.filter(element => element.isTrue == true)

        if(this.props.isOver.isOver == false) {
            return(
                <div className="lg:col-start-5 lg:col-end-12 2xl:col-end-10 row-start-1 lg:row-end-4 sm:row-end-3 p-4 shadow-md rounded box-border h-auto bg-green-50">
                    <QuestionContainer/>
                    <AnswerContainer/>
                    <QuizButton/>
                    <button onClick={() => clearInterval(this.test)}>test</button>
                </div>
            )
        }else{
            return (
                <div className="lg:col-start-5 lg:col-end-12 2xl:col-end-10 row-start-1 lg:row-end-4 sm:row-end-3 grid place-content-center cols-1 text-4xl bg-green-50">
                    <span className="mb-10 justify-self-center">Koniec gry</span>
                    <span className="mb-10 justify-self-center">Prawidłowe odpowiedzi: {arrayOfCorrectAnswers.length}</span>
                    <button 
                        onClick={() =>{
                            this.playAgain();
                            // this.props.isTimerOn ? this.countdown : null
                        }} 
                        className="hover:shadow-2xl bg-green-400 hover:bg-green-500 hover:shadow w-80 rounded-md pt-2 pb-4 px-3 justify-self-center">
                        Zagraj ponownie
                    </button>
                </div>
            )
        } 
    }
}
const mapStateToProps = state => {
    return {
        isOver: state.counter,
        isCorrect: state.isCorrect,
        isTimerOn: state.isTimerOn
    }
}

export default connect(mapStateToProps)(QuizContainer)

