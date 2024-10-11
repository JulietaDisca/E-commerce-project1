import './App.css'

import React from 'react'
import NavBar from './components/NavBar/NavBar';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return(
    <div className='App'>
      <NavBar/>
      <h1>Products List</h1>
    </div>
  ) 
}

export default App