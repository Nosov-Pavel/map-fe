import React, {useState} from "react";
import List from "./List";

function App() {
    const [counters, setCounter] = useState([
        {id: 1, title: 'Counter1', value: 10},
        {id: 2, title: 'Counter2', value: 20},
        {id: 3, title: 'Counter3', value: 30},
    ])
    const [newCounters, setNewCounter] = useState([0, 0, 0]);

    const addCounter = () => {
        console.log('hello')
        counters.push({id: Math.random(), title: 'new', value: 40})
        console.log(counters)

    }


    return (
        <div>
            <button onClick={addCounter}>add</button>
            <List list={counters}
            newCounters = {newCounters}/>


        </div>
    );
}

export default App;

