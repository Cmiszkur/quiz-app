import React from 'react'
import {connect} from 'react-redux'
import QuizAnswer from './QuizAnswer'

// function ButtonAnswer(data) {
//     data.map((answer) => {
//         <button>{answer}</button>
//     })
// }
   
class AnswerContainer extends React.Component {
    render(){
        return(
            <div>
                <QuizAnswer/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        answer: state.currentSet
    }
}

export default connect(mapStateToProps)(AnswerContainer)