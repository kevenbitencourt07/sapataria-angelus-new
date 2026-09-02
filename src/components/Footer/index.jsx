import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div>
          <h2>Angelu<span>'s</span></h2>
          <p>Sapataria artesanal e restauração em couro.</p>
        </div>

        <div className="footer-links">
          <a to="/sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#contato">Contato</a>
        </div>

        <div>
          <p>São Paulo - SP</p>
          <p>Segunda a sexta · 08:00 às 18:00</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Angelu's. Todos os direitos reservados.
      </div>
    </footer>
  );
}