import React from 'react'

class Header extends React.Component {
    render(){
        return(
            <header className="box-border h-five min-h-48 bg-green-200 mb-4 flex justify-end shadow text-gray-600">
                <div>
                    <button className={"pt-1 mr-6 text-2xl hover:text-gray-800 focus:outline-none"}>Zaloguj się</button>
                </div>
            </header>
        )
    }
}

export default Header