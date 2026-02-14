import { useState } from "react"
import "./counter.css"

function Counter(){

    let [count,setCount] = useState(0)
    let [message,setMessage] = useState("")

    const increment = () => {
        setCount(count + 1)
        setMessage("")
    }

    const decrement = () => {
        setCount(count - 1)
        setMessage("")
    }

    const resetval = () => {
        setCount(0)
        setMessage("You reached minimum value")
    }

    return(
        <div className="counter-box">
            <h1>{count}</h1>
            <p>{message}</p>

            <div className="button-group">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={resetval}>Reset</button>
            </div>
        </div>
    )
}

export default Counter
