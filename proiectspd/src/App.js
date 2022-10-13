import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
     <Navbar/>
     <TodoList />
    </div>
  );
}

export default App;
