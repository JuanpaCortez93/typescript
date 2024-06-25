import React from 'react';
import './Todo-List.css';

interface ITodoListProps {
    items: {id:string, text:string}[];
    onDeleteToDo: (id:string) => void
}

const ToDoList : React.FC<ITodoListProps> = (props) => {   
    return <>
        <ul>
            {props.items.map(todo => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={props.onDeleteToDo.bind(null,todo.id)}>Delete</button>
                </li>
            ))}
        </ul>    
    </>
}

export default ToDoList;