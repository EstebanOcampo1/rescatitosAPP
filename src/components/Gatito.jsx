import React from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { getGatito } from '../api/Gatitos';
import '../styles/Gatito.css'

export default function Gatito() {
  const { id } = useParams();
  const [gato, setGato] = useState([]);

  useEffect(() => {
    const getGatitoF = async () => {
      const getGatitoAPI = await getGatito(id);
      setGato(getGatitoAPI);
    }
    getGatitoF();
  }, [id]);

  return (
    <div className='miHtmlGatito'>
      {/*Esto es solo un boton pa volver a la pagina jeej */}
      <div >
        <Link to={'/Rescatitos'}>
        <img src="https://cdn-icons-png.flaticon.com/512/13/13964.png" alt="imagenBack " width={50} style={{ left: 0, margin:'1%' }}></img></Link>
      </div>
      {/*Aca va toda la parte del gatito. Toda la info ya esta en la variable "gato" */}
      <div>

        <div className='foto'>
          <img src={gato.foto} alt="gato foto" />
        </div>
        <div className='info'>
          <h1>{gato.nombre}</h1>
          <h5 style={{display:'inline'}}>Sexo: </h5>
          <p>{gato.sexo}</p>
          <h5 style={{display:'inline'}}>Edad: </h5>
          <p>{gato.edad}</p>
          <h5 style={{display:'inline'}}>Descripcion: </h5>
          <p>{gato.descripcion}</p>
        </div>
      </div>
    </div>

  )
}
