import { Link } from "react-router-dom";
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
          <Link to="/sobre">Sobre</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/comentario">FeedBacks</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/cadastro">Cadastro</Link>
        </div>

        <div>
          <p>Cotia - SP</p>
          <p>Segunda a Quinta - 08:00 às 18:00</p>
          <p>Sexta - 07:00 às 17:00</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Angelu's. Todos os direitos reservados.
      </div>
    </footer>
  );
}