import React from 'react';
import {GiCancel} from 'react-icons/gi'

const TodoList = (props) => {
    return(<>
        <div className='todo-style '>
            <GiCancel className="cross-btn mr-2" onClick={()=>{props.onSelect(props.id)}} />
            <li>{props.text}</li>
        </div>
    </>

    )
}

export default TodoList;