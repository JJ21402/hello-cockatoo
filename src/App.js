import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Product from './components/Product'


function App() {
  return (
    <div>
      <Navbar/>
      <Product/>
    </div>
    
  );
}

export default App;
