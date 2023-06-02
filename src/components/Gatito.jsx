import React from 'react'
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'
import { getGatito } from '../api/Gatitos';

export default function Gatito() {
    const {id} =useParams()
    const [gato, setGato] = useState();

    useEffect(() => {
      const getGatitoF = async () => {
          const getGatitoAPI = await getGatito(id);
          setGato(getGatitoAPI);
      }
      getGatitoF();
    }, [id]);

  return (
    <div>
        {/*Esto es solo un boton pa volver a la pagina jeej */}
    <div><Link to={'/Rescatitos'}>
    <img src="https://cdn-icons-png.flaticon.com/512/13/13964.png"  alt="imagenBack "width={50} style={{left:0}}></img></Link>
    </div>
    {/*Aca va toda la parte del gatito. Toda la info ya esta en la variable "gato" */}
    </div>

  )
}
