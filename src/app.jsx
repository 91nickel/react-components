import React from "react"
import CountersList from "./components/countersList";
import Counter from "./components/counter";

const App = () => {
    return (
        <React.Fragment>
            <CountersList/>
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
export default App