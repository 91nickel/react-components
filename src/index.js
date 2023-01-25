import React from "react"
import reactDom from "react-dom"
import "bootstrap/dist/css/bootstrap.css"

import Counter from "./components/counter";

const App = () => {
    const count = 2
    return (
        <React.Fragment>
            <Counter/>
        </React.Fragment>
    )
    // Эти записи эквивалентны
    // return (
    //     <>
    //         <h1><Counter/></h1>
    //         <button>+</button>
    //     </>
    // )
}

reactDom.render(<App/>, document.getElementById('root'))
