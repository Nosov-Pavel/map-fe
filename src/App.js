import React, {useState} from "react";

function App() {
    const [number,setNumber] = useState(6)

    function addOne() {
        setNumber(number + 1)

    }

    return (
        <div>
            {number}
            <button onClick={addOne}>+</button>

        </div>
    );
}

export default App;

