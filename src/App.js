import React, {useState} from "react";

function App() {
    const [number,setNumber] = useState(6)

    function addOne() {
        setNumber(number + 1)

    }

    return (
        <div>
            <button onClick={function () {
                setNumber(number -1)
            }}>-</button>
            {number}
            <button onClick={addOne}>+</button>

        </div>
    );
}

export default App;

