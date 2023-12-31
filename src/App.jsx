import React from 'react'
import Home from './Pages/Home/Home';
import Nav from './Components/Nav/Nav';
import Product from './Pages/Product/Product';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Home />
      <Product />
    </div>
  )
}

export default App;