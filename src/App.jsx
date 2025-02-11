import React from 'react'
import "./App.css"
import Home from "./Components/Home"
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App