import React, {useState} from "react";
import ListItem from "./listItem";

function App(){
    const [List, setList] = useState([]);
     const getList = () => {

     }


    // http://nazarov-kanban-server.herokuapp.com/card

    return(
        <div>
            <button onClick={getList}>click</button>

        </div>
    );
}

export default App;




























// import React, {useState} from 'react';
//
// function App() {
//
//     const [counter, setCounter] = useState( 10);
//
//     const [counterN, setCounterN] = useState(100);
//
//     const [counter3, setCounter3] = useState(500);
//
//     const buttonPlus = () => {setCounter(counter + 1)}
//     const buttonPlus2 = () => {setCounter(counter + 2);}
//     const buttonPlus3 = () => {setCounter(counter + 3);}
//     const buttonMinus = () => {setCounter(counter - 1);}
//     const buttonMinus2 = () => {setCounter(counter - 2);}
//     const buttonMinus3 = () => {setCounter(counter - 3);}
//     const buttonReset = () => {setCounter(0);}
//     const buttonComeBack = () => {setCounter(10)}
//
//     const buttonPlusOne = () => {
//         setCounterN(counterN + 1);
//     }
//     const buttonPlusTwo = () => {
//         setCounterN(counterN + 2);
//     }
//     const buttonPlusThree = () => {
//         setCounterN(counterN + 3);
//     }
//     const buttonMinusOne = () => {
//         setCounterN(counterN - 1);
//     }
//     const buttonMinusTwo = () => {
//         setCounterN(counterN - 2);
//     }
//     const buttonMinusThree = () => {
//         setCounterN(counterN - 3);
//     }
//     const buttonResetN = () => {
//         setCounterN(0);
//     }
//     const buttonComeBackN = () => {
//         setCounterN(100);
//     }
//     const buttonPl = () => {setCounter3(counter3 + 1)};
//     const buttonMin = () => {setCounter3(counter3 - 1)};
//     const buttonPl2 = () => {setCounter3(counter3 + 2)};
//     const buttonMin2 = () => {setCounter3(counter3 - 2)};
//     const buttonPl3 = () => {setCounter3(counter3 +3)};
//     const buttonMin3 = () => {setCounter3(counter3 -3)};
//     const buttonReset3 = () => {setCounter3(0)};
//     const buttonComeBack3 = () => {setCounter3(500)};
//
//     return (
//         <div>
//             <br/>
//             <br/>
//             <button onClick={buttonMinus3}>-3</button>
//             <button onClick={buttonMinus2}>-2</button>
//             <button onClick={buttonMinus}>-1</button>
//             {counter}
//             <button onClick={buttonPlus}>+1</button>
//             <button onClick={buttonPlus2}>+2</button>
//             <button onClick={buttonPlus3}>+3</button>
//             <button onClick={buttonReset}>Reset</button>
//             <button onClick={buttonComeBack}>Back</button>
//             <br/>
//             <br/>
//             <button onClick={buttonMinusThree}>-3</button>
//             <button onClick={buttonMinusTwo}>-2</button>
//             <button onClick={buttonMinusOne}>-1</button>
//             {counterN}
//             <button onClick={buttonPlusOne}>+1</button>
//             <button onClick={buttonPlusTwo}>+2</button>
//             <button onClick={buttonPlusThree}>+3</button>
//             <button onClick={buttonResetN}>Reset</button>
//             <button onClick={buttonComeBackN}>Back</button>
//             <br/>
//             <br/>
//             <button onClick={buttonMin3}>-3</button>
//             <button onClick={buttonMin2}>-2</button>
//             <button onClick={buttonMin}>-1</button>
//             {counter3}
//             <button onClick={buttonPl}>+1</button>
//             <button onClick={buttonPl2}>+2</button>
//             <button onClick={buttonPl3}>+3</button>
//             <button onClick={buttonReset3}>Reset</button>
//             <button onClick={buttonComeBack3}>Back</button>
//
//
//         </div>
//     );
// }
//
// export default App;
