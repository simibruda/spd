import React, { useState} from 'react';
import './App.css';
import MyCalendar from './components/MyCalendar';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  const [data , setDat] =useState('');
  return (
    <div>
     <Navbar/>
      <MyCalendar setDat={setDat}/>
     <TodoList sendData={data}/>
    </div>
  );
}

export default App;
