import React, {useRef} from 'react';
import './NewTodo.css';

interface INewTodoProps {
    onAddToDo : (todoText:string) => void;
};

const NewToDo:React.FC<INewTodoProps> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event:React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddToDo(enteredText);
    };

    return <>
        <form onSubmit={todoSubmitHandler}>
            <div className='form-control'>
                <label htmlFor="todo-text">Todo Text</label>
                <input type="text" id='todo-text' ref={textInputRef}/>
                <button type='submit'>Add</button>
            </div>    
        </form>      
    </>
}

export default NewToDo;