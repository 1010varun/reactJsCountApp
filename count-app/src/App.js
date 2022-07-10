import React, {useState} from "react";
import "./style.css";

const App = () => {

    let [count, setCount] = useState(10);

    return (
        <div>
            <h1>Welcome To Counter Application</h1>
            <p className="count">current value of count is {count}</p>
            <button onClick = {() => setCount(count = 0)} className="button">reset count to zero</button><br></br><br></br>
            <button onClick = {()=> setCount(count + 1)} className="button">increase count by 1</button><br></br><br></br>
            <button onClick = {() => setCount(count - 1)} className="button">decrease conut by 1</button>

        </div>
    )
}

export default App;