import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Favorites from "./Components/Favorites/Favorites";
import About from "./Components/About/About";


function App() {

  return (
    <div >

      <NavBar/>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favorites' element={<Favorites/>} />
      <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App
