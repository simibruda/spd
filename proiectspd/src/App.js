import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Infografic from './pages/Infografic';
function App() {
  
  return (
    <div>
     <Navbar/>
      
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pages/Dashboard' element={<Dashboard />} />
          <Route path='/pages/Infografic' element={<Infografic />} />
      </Routes>
    </div>
  );
}

export default App;
