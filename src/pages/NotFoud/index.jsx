import React from "react";
import "./NotFoud.css";

export default function NotFound() {
  return (
    <main className="not-found">

      <div className="background-shape shape-1"></div>
      <div className="background-shape shape-2"></div>
      <div className="background-shape shape-3"></div>

      <div className="not-found-content">

        <div className="error-wrapper">
          <span className="error-shadow">404</span>
          <span className="error-number">404</span>
        </div>

        <div className="divider"></div>

        <h1>Página não <em>encontrada</em></h1>

        <p>
          Parece que você se perdeu pelo caminho.
          A página que você está procurando não existe
          ou foi movida para outro lugar.
        </p>

        <a href="/" className="home-button">
          <span>Voltar para o início</span>
          <span className="arrow">→</span>
        </a>

      </div>

    </main>
  );
}