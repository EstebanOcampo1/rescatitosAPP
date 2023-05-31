import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

type HeaderProps={
    query:string,
    setquery:(query:string)=>void
}
export const Header = ({query,setquery}:HeaderProps) => {
  return (
    <>
    <h1 className='titulo' style={{fontWeight:700,textAlign:'center',fontFamily:'moz-initial',border:'2px solid black',backgroundColor:'#778899'}}>Pokedex</h1>
    <header className="box">
        <input className="input"
        type="text" 
        placeholder="Busca un Pokemon"
        value={query}
        
        onChange={(e)=>setquery(e.target.value)}
        />
        
    </header>
    </>
  )
}
