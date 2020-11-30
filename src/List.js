import React, {useState} from "react";

function List(props) {


    return (
        <ul>
            {props.list.map(el=>{
                return(
                    <li>
                        {el.title}
                        {' '}
                        {el.value}
                    </li>
                )
            })}

        </ul>
    );
}

export default List;

