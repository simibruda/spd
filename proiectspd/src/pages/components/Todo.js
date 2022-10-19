import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';


const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  const allInputs=todos.length;
  const [cont, inCont]=useState(0);
function Checked(){
  inCont(prev=> prev + 1 );
}



  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} 
    onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    
    <div
      className={'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text} 
        <p className='data-todo'>{todo.dates}</p>
      </div>
      <label className="container-checkbox">
    
    </label>
      <div className='icons'>
      <input type="radio" onChange={Checked}/>
    <p>{cont}/{allInputs}</p>
        
        
      </div>
    </div>
    
  ));
};

export default Todo;