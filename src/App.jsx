import './App.css'

import React from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ProductPage from './components/ProductPage/ProductPage';

const App = () => {
  return(
    <div className='App'>
      <NavBar/>
      <ItemListContainer />
      <ProductPage />
    </div>
  ) 
}

export default App;