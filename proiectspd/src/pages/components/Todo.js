import React, { useEffect, useState } from 'react';
import axios from 'axios';




const Todo = ({ todos , setChek}) => {
 

const [sendTimes ,setSendTimes]=useState(0);
function Checked(index , idtodo){
  
 
 setSendTimes(prev => prev+1);
  fetch('/update_check', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify({id:idtodo})
  }).then(response=>response.json()).then(data=>{
       
       //Do anything else like Toast etc.
  })
 
}
useEffect(() => {
  setChek(Math.floor(Math.random() * 10000).toString());
 },[sendTimes]);




todos.sort((elem1, elem2) => new Date(elem1.dates) - new Date(elem2.dates));



 
  return todos.map((todo, index) => (
    
    <div
      className={'todo-row'}
      key={index}
    >
      <div key={todo.id} >
        {todo.text} 
        <p className='data-todo'>{new Date(todo.dates).toDateString()}</p>
       
      </div>
      <label className="container-checkbox">
    
    </label>
      <div className='icons'>
      <input type="checkbox" onChange={()=>{
            Checked(index,todo.id)
      }} checked={todo.checked==true} />
    
        

      </div>
    </div>
    
  ));
};

export default Todo;