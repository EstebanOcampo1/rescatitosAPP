import React from 'react'
import {useState,useEffect} from 'react';
import '../styles/Gatitos.css'
import { deleteGatico, getGatitos, updateGatico } from '../api/Gatitos';
import Swal from 'sweetalert2';

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
                  'El gatico con "' + nombre + '" se ha borrado del sistema',
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

function crearGatito(nombre, sexo,edad, foto, descripcion) {
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
          crearGatito(result.value[0], result.value[1], result.value[3], result.value[2], result.value[4])
          Swal.fire(
              'Actualizado!',
              'El Gatito ha sido creado correctamente!',
              'success'
          ).then((r) => {
              if (r.isConfirmed) {
                  window.location.reload(false);
              }
          })
      }
  })
}



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
          {/* Cambiar este numbero y poner el editarGatito */}
        <button type="button" className='boton' onClick={()=>{}}>Editar</button>
        <button type="button" className='boton' onClick={()=>{eliminarGatito(12)}}>Eliminar</button>
        </div>
      </div>
    </div>
    
    

    </div> 
    </div>

  )
}
