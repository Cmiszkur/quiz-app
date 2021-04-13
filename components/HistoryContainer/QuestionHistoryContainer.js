import React from 'react'
import AnswersHistoryContainer from './AnswersHistoryContainer'
import {connect} from 'react-redux'



class QuestionHistoryContainer extends React.Component {

    render(){
        const QuestionHistory = this.props.QuestionHistory
        const questions = QuestionHistory.map((question) =>{
            return <div className={"pb-1 mb-2 px-2 min-w-full bg-gray-100"} key={question._id}> 
            <p className="text-center">{question.content}</p> <AnswersHistoryContainer answers={question.answer}/>
            </div>    
        })
        return(
            <div className="divide-y-2 divide-green-500 divide-dashed">
               {questions}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        QuestionHistory: state.questionHistory
    }
}

export default connect(mapStateToProps)(QuestionHistoryContainer)