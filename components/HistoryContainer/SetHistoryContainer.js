import React from 'react'
import QuestionHistoryContainer from './QuestionHistoryContainer'
import {connect} from 'react-redux'

class SetHistoryContainer extends React.Component {

    render(){
        const QuestionHistory = this.props.QuestionHistory
        
        if (!QuestionHistory || QuestionHistory.length == 0) {
              return(
                <p>Nie podano jeszcze żadnej odpowiedzi</p> 
              )       
        }else{
            return(
                <div className="flex flex-col min-w-full">
                    <QuestionHistoryContainer />
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        QuestionHistory: state.questionHistory
    }
}

export default connect(mapStateToProps)(SetHistoryContainer)