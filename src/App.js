import React, {useState} from "react";
import List from "./List";

function App() {
    const [counters, setCounter] = useState([
        {id: 1, title: 'Counter1', value: 10},
        {id: 2, title: 'Counter2', value: 20},
        {id: 3, title: 'Counter3', value: 30},
    ])
    const [newCounters, setNewCounter] = useState([0, 0, 0]);


    return (
        <div>
            <List list={counters}
            newCounters = {newCounters}/>


        </div>
    );
}

export default App;

