import React,{useState , useEffect} from 'react';
import {BsCheckLg, BsXLg} from "react-icons/bs";
import './TodoList.css';

function DashboardList({ todos, setCountDates , setAllDates}) {
const [counterChecked,setCounterCheck]=useState(0);
const alldates=todos.length;
    useEffect(()=>{
      setCounterCheck(0);
      todos.filter((todo) =>{
        if(todo.checked==1){
          setCounterCheck(prev => prev + 1)
     
        }
      })

      
    },[todos]);
   
    setCountDates(counterChecked);
    setAllDates(alldates);
   
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
    {todo.checked==true ?<BsCheckLg />:<BsXLg />}
      </div>
    </div>
    
  ));
}

export default DashboardList
