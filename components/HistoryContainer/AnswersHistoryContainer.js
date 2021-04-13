import React from 'react'

function RenderAnswers(props){
    return props.input.map((answer) => {
        return <button key={answer._id} className="rounded-md bg-green-400">{answer.content}</button>
    })
}

class AnswersHistoryContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {dropDown: false}
        this.toggleDropDown = this.toggleDropDown.bind(this)
    }

    toggleDropDown() {
        this.setState(state => ({
            dropDown: !state.dropDown
        }))
}

    render(){
        const answers = this.props.answers
        if(this.state.dropDown) {   
            return (
                <div className="grid grid-cols-2 gap-1">
                    <RenderAnswers input={answers}/>
                    <div id="arrow" onClick={this.toggleDropDown} className="mt-3 flex justify-center col-span-2"> 
                        <svg className="cursor-pointer"  width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1.41421" y1="1.58579" x2="16.9223" y2="17.0938" stroke="#828282" stroke-width="4"/>
                            <line x1="14.0938" y1="17.0938" x2="29.6019" y2="1.58578" stroke="#828282" stroke-width="4"/>
                        </svg> 
                    </div> 
                </div>
            )
        }else {
            return (
                <div>
                    <div id="arrow" onClick={this.toggleDropDown} className="mt-3 flex justify-center col-span-2"> 
                        <svg className="cursor-pointer"  width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="1.41421" y1="1.58579" x2="16.9223" y2="17.0938" stroke="#828282" stroke-width="4"/>
                            <line x1="14.0938" y1="17.0938" x2="29.6019" y2="1.58578" stroke="#828282" stroke-width="4"/>
                        </svg> 
                    </div> 
                </div>
            )
        }
    }
}

export default AnswersHistoryContainer