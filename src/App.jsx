import './App.css'

import React from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return(
    <div className='App'>
      <NavBar/>
      <ItemListContainer />
    </div>
  ) 
}

export default App