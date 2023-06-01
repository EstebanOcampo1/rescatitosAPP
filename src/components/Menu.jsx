import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gatitos from './Gatitos';


export default function Menu() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path="/" element={<Gatitos/>}/>
        </Routes>
        
    </Router>
    </div>
  )
}
