import React from 'react'
import {useState,useEffect} from 'react';
import '../styles/Gatitos.css'
import { createGatico,deleteGatico, getGatitos, updateGatico } from '../api/Gatitos';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function Gatitos() {
    const [query, setquery] = useState("");
    const [gatos, setGatos] = useState([]);

    useEffect(() => {
      const getGatitosF = async () => {
          const getGatitosAPI = await getGatitos();
          setGatos(getGatitosAPI);
      }
      getGatitosF();
    }, []);

    function eliminarGatito(idGatico, nombre) {
      Swal.fire({
          title: '¿Estás seguro?',
          text: "No podrás recuperar esta informacíón",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sí, bórralo',
          reverseButtons: true
      }).then((result) => {
          if (result.isConfirmed) {
              deleteGatico(idGatico);
              Swal.fire(
                  'Borrado!',
                  'El gatico "' + nombre + '" se ha borrado del sistema',
                  'success'
              ).then((r) => {
                  if (r.isConfirmed) {
                      window.location.reload(false);
                  }
              })

          }
      })
  }

  function editarGatito(idgatico,gatico,nombre, sexo,edad, foto, descripcion) {
    Swal.fire({
        title: 'Actualice los datos',
        width: window.innerWidth < 1200 ? '100%' : '60%',
        showCloseButton: true,
        html:
            '<div><label class="swal2-label col-md-2">Nombre </label>' +
            '<input id="swal-inputNombre" class="swal2-input swal2-select" value="' + nombre + '"> </div>' +
            '<div> <label class="swal2-label col-md-2"> Sexo </label>' +
            '<input id="swal-inputSexo" class="swal2-input swal2-select" value="' + sexo + '"> </div>' +
            '<div> <label class="swal2-label col-md-2"> Edad </label>' +
            '<input id="swal-inputEdad" class="swal2-input swal2-select" value="' + edad + '"> </div>' +
            '<div><label class="swal2-label col-md-2"> Foto </label>' +
            '<input id="swal-inputFoto" class="swal2-input swal2-select" value="' + foto + '"> </div>' +
            '<div><label class="swal2-label col-md-2"> Descripcion </label>' +
            '<input id="swal-inputDescripcion" class="swal2-input swal2-select" value="' + descripcion + '"></div>'
        ,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('swal-inputNombre').value,
                document.getElementById('swal-inputSexo').value,
                document.getElementById('swal-inputFoto').value,
                document.getElementById('swal-inputEdad').value,
                document.getElementById('swal-inputDescripcion').value
            ]
        }
    }).then((result) => {
        if (result.isConfirmed) {

            updateGatico(idgatico, gatico, result.value[0], result.value[3], result.value[1], result.value[2], result.value[4])
            Swal.fire(
                'Actualizado!',
                'La información se ha actualizado correctamente!',
                'success'
            ).then((r) => {
                if (r.isConfirmed) {
                    window.location.reload(false);
                }
            })
        }
    })
}

function crearGatito() {
  Swal.fire({
      title: 'Ingrese los datos',
      width: window.innerWidth < 1200 ? '100%' : '60%',
      showCloseButton: true,
      html:
          '<div><label class="swal2-label col-md-2">Nombre </label>' +
          '<input id="swal-inputNombre" class="swal2-input swal2-select"> </div>' +
          '<div> <label class="swal2-label col-md-2"> Sexo </label>' +
          '<input id="swal-inputSexo" class="swal2-input swal2-select"> </div>' +
          '<div> <label class="swal2-label col-md-2"> Edad </label>' +
          '<input id="swal-inputEdad" class="swal2-input swal2-select" > </div>' +
          '<div><label class="swal2-label col-md-2"> Foto </label>' +
          '<input id="swal-inputFoto" class="swal2-input swal2-select"> </div>' +
          '<div><label class="swal2-label col-md-2"> Descripcion </label>' +
          '<input id="swal-inputDescripcion" class="swal2-input swal2-select"></div>'
      ,
      focusConfirm: false,
      preConfirm: () => {
          return [
              document.getElementById('swal-inputNombre').value,
              document.getElementById('swal-inputSexo').value,
              document.getElementById('swal-inputFoto').value,
              document.getElementById('swal-inputEdad').value,
              document.getElementById('swal-inputDescripcion').value
          ]
      }
  }).then((result) => {
      if (result.isConfirmed) {
        createGatico(result.value[2], result.value[0], result.value[3], result.value[1], result.value[4])
      }
  })
}

const buscarGatito=gatos?.slice(0,gatos.length).filter((gato)=>{
    return gato.nombre.toLowerCase().match(query.toLowerCase());
});


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
        
        onChange={(e)=>setquery(e.target.value)}
        />
        
    </header> 
    <div className='d-flex justify-content-around flex-wrap  contenedorGatitos'>
    
    {buscarGatito?.slice(0,gatos.length).map((gato)=>(
        <div className='col-3 gatito' key={gato.id}> 
         <img
         src={gato.foto}
         alt="Imagen"
       />
       <div className='labels'>
         <Link to={`/Rescatitos/${gato.id}`} className='listItem' key={gato.id}>
         <label className='nombreGatito'>{gato.nombre}</label>
         </Link>
         <label>{gato.sexo}</label>
         <label>{gato.edad}</label>
         <div className='divBotones'>   
           {/* Cambiar este numbero y poner el editarGatito */}
         <button type="button" className='boton' onClick={()=>{editarGatito(gato.id,gato,gato.nombre, gato.sexo,gato.edad, gato.foto, gato.descripcion)}}>Editar</button>
         <button type="button" className='boton' onClick={()=>{eliminarGatito(gato.id, gato.nombre)}}>Eliminar</button>
         </div>
       </div>
       </div>
    ))

    } 
     
      
    
    
    
    <button type="button" className='boton' onClick={()=>{crearGatito()}}>Añadir gatito</button>
    </div> 
    </div>

  )
}
