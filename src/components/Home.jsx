import React from "react";
import "./Home.css"

export default function App() {
  return (
    <>
      <header>
        <h2>Angelu<span>'s</span></h2>

        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

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

        <a href="#catalogo" className="btn">Ver Catálogo</a>
      </main>

      <footer>
        <h2>Angelu<span>'s</span></h2>
      </footer>
    </>
  );
}