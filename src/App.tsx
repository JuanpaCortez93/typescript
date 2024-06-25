import React, {useState} from 'react';
import ToDoList from './Components/Todo-List';
import NewToDo from './Components/NewTodo';

import { IToDoList } from './Models/Todo-List.model';

const App:React.FC = () => {

  const [toDos, setToDos] = useState<IToDoList[]>([]);

  const todoAddHandler = (text:string) => {
    setToDos(prevTodos => [
      ...prevTodos, 
      {id: Math.random().toString(), text}
    ]);
  }

  const todoDeleteHandler = (todoId:string) => {
    setToDos(prevToDos => {
      return prevToDos.filter(prevTodo => prevTodo.id !== todoId);
    });
  }

  return (
    <>
      <NewToDo onAddToDo={todoAddHandler}></NewToDo>
      {/*A component which adds all todos from the list*/}
      <ToDoList items={toDos} onDeleteToDo={todoDeleteHandler}></ToDoList>
    </>
  );
}

export default App;
