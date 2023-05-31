import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Pokemon } from './Pokemon' ;
import { PokemonName } from './PokemonName' ;


export default function Menu() {
  return (
    <div>
    <Router>
        <Routes>
            <Route path="/pokemons/:name" element={<PokemonName/>}/>
            <Route path="/pokemons" element={<Pokemon/>}/>
            <Route path="/" element={<Pokemon/>}/>
        </Routes>
        
    </Router>
    </div>
  )
}
