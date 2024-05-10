//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import './App.css';

import Home from './pages/home/Home'
import Politicians from './pages/politicians/Politicians'
import Complaint from './pages/complaint/Complaint'
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">    
    <BrowserRouter>       
      <Routes>
      
        <Route  path='/' element={<Home />} />
        <Route  path='/politicians' element={<Politicians/>} />
        <Route  path='/complaint' element={<Complaint />} />
      
      </Routes>
      </BrowserRouter> 
        
    
    </div>
  );
}

export default App;
