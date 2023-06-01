import { addDoc, collection, deleteDoc, doc, getDocs, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import Swal from 'sweetalert2';

const gatoCollectionRef = collection(db, "gatitos");

const getGatitos = async () => {
    try {
        const data = await getDocs(gatoCollectionRef);
        const gatitos = data.docs.map((doc)=> {
            return (
                { ...doc.data(), id: doc.id }
            )
        })
        return gatitos;
    } catch (error) {
        console.log(error);
    }
};

const getGatito = async (id) => {
    const gaticoRef = doc(db, "gatitos", id);
    try {
        const gaticoDoc = await getDoc(gaticoRef);
        if (gaticoDoc.exists()) {
            const gatico = (gaticoDoc.data());
            return gatico;
        } else {
            console.log("problemmmas :c");
        }
    } catch (error) {
        console.log(error);
    }
}


const createGatico = async (foto,nombre,edad, sexo) => {
    try {
      await addDoc(gatoCollectionRef, {
        foto:foto,
        nombre: nombre,
        edad: edad,
        sexo: sexo
      });
      //alerta y limpiar campos
      Swal.fire({
        icon: 'success',
        title: 'Ingreso exitoso',
        text: '¡El gatico ha sido registrado!'
      }).then((result)=>{
        window.location.reload(false);
      });

    } catch (error) {
      console.log(error);
    }
  };

const deleteGatico = async(id) => {
    const gaticoDoc = doc(db, "gatitos", id);
    try {
        await deleteDoc(gaticoDoc);
    } catch (error) {
        console.log(error);
    }
}

const updateGatico = async (id , gatico, newnombre, newEdad, newSexo, newfoto, ) => {
    const gaticoDoc = doc(db, "gatitos", id);
    console.log("holaa, aquitamos");
    try {
        const newInfo = {
            nombre: (newnombre === undefined ? gatico.nombre : newnombre),
            edad: (newEdad === undefined ? gatico.Edad : newEdad),
            foto: (newfoto=== undefined ? gatico.foto : newfoto),
            sexo: (newSexo === undefined ? gatico.sexo : newSexo)
        };
        await updateDoc(gaticoDoc, newInfo);
    } catch (error) {
        console.log(error);
    }
    

}



export {getGatitos, createGatico, getGatito, deleteGatico, updateGatico}
