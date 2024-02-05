import React from 'react'; 
import './App.css';
import Header from './components/header';
import Slider from './components/Slider';
import ProductionHouse from './components/ProductionHouse';

// https://api.themoviedb.org/3/discover/movie?api_key=dcde15adcd30fbddb22eff30a53259a1

function App() {
  return (
    <>
      <div className="">
      <Header/>
      <Slider/>
      <ProductionHouse/>
      </div>
      </>
  )
}

export default App
