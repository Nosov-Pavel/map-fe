import React, {useState} from "react";
import axios from 'axios';
import ListItem from "./listItem";

function App(){
    const [List, setList] = useState([]);
     const getList = () => {
         axios.get('http://nazarov-kanban-server.herokuapp.com/card')
             .then(res => {
                 setList(res.data);

             })
             .catch(error => {
                 console.log(error)

             })


     }
     const deleteCard = async (id) => {
         await axios.delete(`http://nazarov-kanban-server.herokuapp.com/card/${id}`)
             .then(res => console.log(res))
             .catch(err => console.log(err))

     }
     const createCard = () => {
         axios.post('http://nazarov-kanban-server.herokuapp.com/card/',{
             name: 'hello',
             description: 'bye'
         })
             .then(res => console.log(res))
             .catch(err => console.log(err))

     }

    return(
        <div>
            <button onClick={createCard}>create</button>
            <button onClick={getList}>get</button>
            <hr/>
            {list.map(el =>
                <ListItem el={el} deleteCard={deleteCard}/>
            )}
        </div>
    );
}

export default App;

