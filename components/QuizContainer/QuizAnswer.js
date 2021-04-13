import React from 'react'
import {connect} from 'react-redux'
import store from '../../redux/reducer'

function next(event){
    fetch('http://localhost:3080/answers/' + event.target.value)
    .then(response => response.json())
    .then(data => store.dispatch({type:'checkAnswer', payload: data}))
    store.dispatch({type: 'showNext'})
    store.dispatch({type: 'resetTimer'})
}

class QuizAnswer extends React.Component {
    render(){
        const answers = this.props.answer.answer
        const MappedAnswers = [] = answers ? answers.map((answer) =>{
            return <button onClick={next} className="hover:shadow-2xl text-4xl min-w-2/5 h-max pt-2 pb-4 m-1 rounded-md bg-green-400 hover:bg-green-500 text-gray-700" key={answer._id} value={answer._id}>{answer.content}</button>
        }) : []
        return(
            <div className="grid grid-cols-2 grid-rows 2">
                {MappedAnswers}
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        answer: state.currentSet
    }
}

export default connect(mapStateToProps)(QuizAnswer)