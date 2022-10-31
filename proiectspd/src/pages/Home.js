import React, { useState}  from 'react'
import MyCalendar from './components/MyCalendar';
import TodoList from './components/TodoList';

export default function Home(){
    let [data , setDat] =useState('');

  return (
    <div>
      <MyCalendar setDat={setDat}/>
     <TodoList sendData={data}/>
    
    </div>
  )
}    


