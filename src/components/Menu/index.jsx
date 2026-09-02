import { Link } from 'react-router-dom'
import "./Menu.css"
      
export default function Menu() {
    return (
        <>
      <header>
        <Link to="/" className="linkHeader">
          <h2>Angelu<span>'s</span></h2>
        </Link>

        <nav>
          <Link to="/sobre">Sobre</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/catalogo">Catálogo</Link>
          <a href="#contato">Contato</a>
        </nav>
      </header>
      </>
      )
  }