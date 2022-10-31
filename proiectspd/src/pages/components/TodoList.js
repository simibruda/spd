import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './TodoList.css';

function TodoList({sendData}) {
  const [chek,setChek]=useState('');
  const [todos, setTodos] = useState([]);

  const [dblist , takeDbtask]=useState([]);
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };
  


  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };



  useEffect(()=>{
    fetch('/take_tasks', {
     method: 'post',
     headers: {'Content-Type': 'application/json'}
   }).then(response=>response.json()).then(data=>{
     takeDbtask(data);
      
   })   
   },[todos,chek]);

   //console.log(chek);

  
  return (
    <div className='TheList'>
      <h1>What's the Plan for {sendData}?</h1>
      <TodoForm 
   onSubmit={addTodo} 
   MyData={sendData}
       />
       <div className='intemList'>
      <Todo
        listData={sendData}
        todos={dblist}
        completeTodo={completeTodo}
       removeTodo={removeTodo}
        updateTodo={updateTodo}
        setChek={setChek}
      />
      </div>
  </div>
  );
}

export default TodoList;