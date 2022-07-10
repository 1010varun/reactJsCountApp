import React, {useState} from "react";
import "./style.css";

const App = () => {

    let [count, setCount] = useState(50);

    return (
        <div>
            <h1>Welcome To Counter Application</h1>
            <p className="count">current value of count is {count}</p>
            <button onClick = {() => setCount(count = 50)} className="button">reset count to fifty</button><br></br><br></br>
            <button onClick = {()=> ((count >= 100) ? "" : setCount(count + 1))} className="button">increase count by 1
            </button><br></br><br></br>
            <button onClick = {() => ((count !== 0) ? setCount(count - 1) : "")} className="button">decrease conut by 1</button>

        </div>
    )
}

export default App;