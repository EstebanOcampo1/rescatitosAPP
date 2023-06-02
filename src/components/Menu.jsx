import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gatitos from './Gatitos';
import Gatito from './Gatito';


export default function Menu() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path="/" element={<Gatitos/>}/>
          <Route path="/Rescatitos" element={<Gatitos/>}/>
          <Route path="/Rescatitos/:id" element={<Gatito/>}/>

        </Routes>
        
    </Router>
    </div>
  )
}
