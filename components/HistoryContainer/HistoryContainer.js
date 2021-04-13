import React from 'react'
import SetHistoryContainer from './SetHistoryContainer'

class HistoryContainer extends React.Component {

    render(){
        return(
            <div className="3xl:col-start-3 2xl:col-start-2 lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-4 box-border h-auto p-4 shadow-md rounded text-xl bg-green-50 overflow-y-auto overflow-x-hidden">
                <h1 className="text-center pb-6 min-w-full">Poprzednie Pytania</h1>
                <SetHistoryContainer />
            </div>
        )
    }
}

export default HistoryContainer