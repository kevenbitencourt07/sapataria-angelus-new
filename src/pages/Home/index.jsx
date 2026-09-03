import { Link } from 'react-router-dom'
import "./Home.css"

export default function App() {
  return (
    <>
      <main className="hero">
        <h1>
            Elegância Artesanal
            <br />
             em <span>Cada Detalhe</span>
        </h1>

        <p>
          Bolsas restauradas com acabamentos impecáveis,
          interiores de carros clássicos como novos e couro legítimo.
        </p>

        <Link to="/catalogo" className="btn">Ver Catálogo</Link>
      </main>

    </>
  );
}