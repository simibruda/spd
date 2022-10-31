import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
 
  const handleChange = e => {
    setInput(e.target.value);
  };

const TheListData=props.MyData
  const handleSubmit = e => {
    e.preventDefault();
  const id= Math.floor(Math.random() * 10000)
    props.onSubmit({
      id: id,
      text: input,
      dates:TheListData,
      checked:false
    });
   
    const dbobject={
      id:id,
      text: input,
      dates:new Date(TheListData).getFullYear() + "-" + ("0" + (new Date(TheListData).getMonth() + 1)).slice(-2) + "-" + ("0" + new Date(TheListData).getDate()).slice(-2),
      checked:false
  
    }

    fetch('/add_task', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(dbobject)
    }).then(response=>response.json()).then(data=>{
         
         //Do anything else like Toast etc.
    })
    setInput('');
  
  };

  


  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
          autoComplete='off'
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
          autoComplete='off'
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;