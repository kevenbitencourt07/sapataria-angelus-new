import React from "react";
import "./Sobre.css";

export default function Sobre() {
  return (
    <main className="sobre">

      <section className="sobre-hero">
        <div className="sobre-titulo">
          <span>CONHEÇA A</span>
          <h1>Nossa História</h1>
          <div></div>
        </div>
      </section>

      <section className="sobre-conteudo">

        <div className="sobre-texto">
          <span className="sobre-label">ANGELU'S</span>

          <h2>
            Tradição, cuidado
            <br />
            e <span>elegância.</span>
          </h2>

          <p>
            A Angelu's nasceu da paixão pelo trabalho artesanal e pelo
            cuidado com cada detalhe. Nosso propósito é devolver vida
            a peças de couro, preservando sua história e sua identidade.
          </p>

          <p>
            Trabalhamos com restauração de bolsas, couro legítimo e
            interiores de carros clássicos, sempre buscando um resultado
            que una qualidade, tradição e sofisticação.
          </p>
        </div>

        <div className="sobre-detalhe">
          <div className="numero">01</div>

          <h3>
            Feito à mão.
            <br />
            Feito com propósito.
          </h3>

          <p>
            Cada peça recebe atenção individual e um acabamento pensado
            para valorizar sua beleza original.
          </p>
        </div>

      </section>

      <section className="sobre-frase">
        <p>
          "Porque cada peça carrega uma história."
        </p>
      </section>

    </main>
  );
}