import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import React from 'react'
import NavBar from './components/NavBar/NavBar';

//Pages
import AppleIcon from './pages/AppleIcon';
import Iphones from './pages/Iphones';
import AirPods from './pages/AirPods';
import Watches from './pages/Watches';
import Cart from './pages/Cart';

const App = () => {
  return(
    <Router>
      <div className='App'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<AppleIcon/>} />
          <Route path='/iphones' element={<Iphones/>} />
          <Route path='/airpods' element={<AirPods/>} />
          <Route path='/watches' element={<Watches/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </div>
    </Router>
  ) 
}

export default App;
