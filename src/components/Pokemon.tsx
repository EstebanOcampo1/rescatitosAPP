import {useState,useEffect} from 'react'
import '../styles/Pokemon.css'
import { Link } from 'react-router-dom';
import {Header} from './Header';
import { todosLosPokemon } from '../apis/fetchPokemon';
export const Pokemon = () => {
    const [query, setquery] = useState("");
    const [pokemon, setpokemon] = useState<any>([]);
    
    useEffect(() => {
        const fetchPokemon=async()=>{
            const allpokemon = await todosLosPokemon();
            setpokemon(allpokemon);
          }
          fetchPokemon();
    }, [])
    const filterPokemon=pokemon?.slice(0,493).filter((poke:any)=>{
      return poke.name.toLowerCase().match(query.toLowerCase());
  });

    
    
  return (
    
    <>
    
    <body className='miHtml'>
    <Header query={query} setquery={setquery}/>
        <div className='contenedor'>
            <div className='row pokedex'>
                {filterPokemon?.slice(0,493).map((poke:any) =>(
                     <div className='col-3 divPokemon'>
                        
                        <h2>{poke.id}</h2>
                        <img src={poke.imgsrc} alt={poke.name} className='listIcon'/>
                        <Link to={`/pokemons/${poke.name.toLowerCase()}`} className='listItem' key={poke.id}>
                        <h4>{poke.name.toUpperCase()}</h4>
                        </Link>
                        <div className='divTipos'>
                          
                        {poke.types.map((type:any) =>(
                                    <div className='tipo'>
                                     {
                                     type
                                     }
                                     </div>
                        ))}</div>
                        
                     </div>
                ))}
            </div>
            
        </div>
        </body>
       
    </>
  )
}