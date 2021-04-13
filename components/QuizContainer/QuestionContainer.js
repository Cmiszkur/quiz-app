import React from 'react'
import store from '../../redux/reducer'
import {connect} from 'react-redux'

class QuestionContainer extends React.Component {
    render(){
        return(
           <div className="grid place-content-center mb-5">
               <span className="text-4xl text-center text-gray-800">{this.props.question.content || "loading" ? this.props.question.content : "loading"}</span>
           </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        question: state.currentSet
    }
}

export default connect(mapStateToProps)(QuestionContainer)