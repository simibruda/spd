import React from 'react';
import './App.css';
import MyCalendar from './components/MyCalendar';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
     <Navbar/>
    <MyCalendar />
     <TodoList />
    </div>
  );
}

export default App;
