import React from 'react'
import {useState,useEffect} from 'react';
import '../styles/Gatitos.css'

export default function Gatitos() {
    const [query, setquery] = useState("");


  return (
    <div className='miHtml'>
        <div className='row'>
        <h6 className='col-7 titulo' style={{fontWeight:400 ,fontFamily:'moz-initial',backgroundColor:'FFFFFFF',left:30}}>Powered By: Dazapi y Esteban Ocampo</h6><h6 className='col-5 titulo' style={{fontWeight:400 ,fontFamily:'moz-initial',backgroundColor:'FFFFFFF',justifyContent:'center' }}>Codigo completo en Github</h6>
        </div>
        <div className='headerMain'>
        <h1 style={{fontWeight:1000  ,textAlign:'center',fontFamily:'moz-initial',border:'2px solid black',backgroundColor:'#5632a8',color:"white"}}>Rescatitos 😼</h1>
    </div>

    <header className="box">
        <input className="input"
        type="text" 
        placeholder="Busca un gatito"
        value={query}
        
        onChange={(e)=>setquery(e.target.value)}
        />
        
    </header> 
    <div className='d-flex justify-content-around flex-wrap  contenedorGatitos'>
    <div className='col-3 gatito'>
      <img
        src="https://bestfriends.org/sites/default/files/styles/story_desktop_1920x1230_/public/story_images/Goob5222LF_1124x554.jpg?h=5c78e16c&itok=T2QpIcxT"
        alt="Imagen"
    
      />
      <div className='labels'>
        <label className='nombreGatito'>Plutarca</label>
        <label>F</label>
        <label>5 meses</label>
        <div className='divBotones'>
        <button type="button" className='boton'>Editar</button>
        <button type="button" className='boton'>Eliminar</button>
        </div>
      </div>
    </div>
    
    

    </div> 
    </div>

  )
}
