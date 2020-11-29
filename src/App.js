import React, {useState} from "react";

function App() {
    const [number,setNumber] = useState(6)

    function addOne() {
        number++
        console.log(number)

    }

    return (
        <div>
            {number}
            <button onClick={addOne}>+</button>

        </div>
    );
}

export default App;

