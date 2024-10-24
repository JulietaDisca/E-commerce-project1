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
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {
  return(
    <Router>
      <div className='App'>
        <NavBar/>
        <Routes>
          <Route path='/' element={<AppleIcon/>} />
          <Route path='/category/iphones' element={<Iphones/>} />
          <Route path='/category/airpods' element={<AirPods/>} />
          <Route path='/category/watches' element={<Watches/>} />
          <Route path='/category/cart' element={<Cart/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/category/:categoryId' element={<Iphones/>} />
        </Routes>
      </div>
    </Router>
  ) 
}

export default App;
