import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { IPokemon } from '../models/IPokemon';
import { pokemonName } from '../apis/fetchPokemonName';
import '../styles/PokemonName.css'

export const PokemonName = () => {
    const {name}=useParams();
    const [pokemon, setpokemon] = useState<IPokemon>();
    
    useEffect(() => {
        const fetchPokemon=async()=>{
            const allpokemon = await pokemonName(name as string);
            setpokemon(allpokemon);
          }
          fetchPokemon();
    }, [name])
    
  return (
    <>
    <Link to={'/pokemons'}>
    <img src="https://cdn-icons-png.flaticon.com/512/13/13964.png" width={50} style={{left:0}}></img></Link>
        <div className='pokemonName'>
          
           
            <h1 style={{fontWeight:800}}>{pokemon?.name.toUpperCase()} N.º{pokemon?.id}</h1>
            
            <img className='imgPokemon' src={pokemon?.imgsrc} alt={pokemon?.name} />
            <div className='divTipos'>
                        {pokemon?.types.map((type:any) =>(
                                    <div className='tipo'>
                                     {
                                     type
                                     }
                                     </div>
                        ))}</div>
            <div  className='estadisticas'>
            <h2>Estadísticas</h2>
            <div>Attack: {pokemon?.attack} </div>  
            <div>Special Attack: {pokemon?.spAttack} </div>  
            <div>Defense: {pokemon?.defense}</div>
            <div>Special Defense: {pokemon?.spDefense}</div>
            <div>HP: {pokemon?.hp}</div>
            <div>Speed: {pokemon?.speed}</div>
            </div>
        </div>
    </>
  )
}