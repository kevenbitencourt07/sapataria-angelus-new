import React, { useState } from "react";
import "./Catalogo.css";

// Imagens
import antes1 from "../../assets/img/antes1.jpeg"
import depois1 from "../../assets/img/depois1.jpeg"
import antes2 from "../../assets/img/antes2.jpeg"
import depois2 from "../../assets/img/depois2.jpeg"
import antes3 from "../../assets/img/antes3.jpeg"
import depois3 from "../../assets/img/depois3.jpeg"
import antes4 from "../../assets/img/antes4.jpeg"
import depois4 from "../../assets/img/depois4.jpeg"

export default function Catalogo() {

    const servicos = [
        {
            nome: "Restauração de Bolsa",
            descricao: "Recuperação e renovação completa do couro."
        },
        {
            nome: "Restauração de Couro",
            descricao: "Tratamento e revitalização do couro."
        },
        {
            nome: "Interior Automotivo",
            descricao: "Restauração de interiores de carros clássicos."
        }
    ];

    const [imagemAtual, setImagemAtual] = useState(
        servicos.map(() => "antes")
    );

    const alternarImagem = (index) => {
        setImagemAtual((prev) =>
            prev.map((item, i) =>
                i === index
                    ? item === "antes" ? "depois" : "antes"
                    : item
            )
        );
    };

    return (
        <main className="catalogo">

            <section className="catalogo-header">
                <span>ANGELU'S</span>

                <h1>
                    Nosso <em>Catálogo</em>
                </h1>

                <p>
                    Cada restauração é feita com cuidado,
                    técnica e atenção aos detalhes.
                </p>
            </section>

            <section className="catalogo-grid">

                {/* CARD 1 */}
                <article className="card-servico">

                    <div className="card-imagem">

                        {imagemAtual[0] === "antes" ? (
                            <img
                                src={antes1}
                                alt="Bolsa antes da restauração"
                            />
                        ) : (
                            <img
                                src={depois1}
                                alt="Bolsa depois da restauração"
                            />
                        )}

                        <span className="imagem-label">
                            {imagemAtual[0] === "antes"
                                ? "ANTES"
                                : "DEPOIS"}
                        </span>

                        <button onClick={() => alternarImagem(0)}>
                            {imagemAtual[0] === "antes"
                                ? "Ver depois →"
                                : "← Ver antes"}
                        </button>

                    </div>

                    <div className="card-info">
                        <span>RESTAURAÇÃO</span>
                        <h2>Restauração de Bolsa</h2>
                        <p>
                            Recuperação e renovação completa do couro.
                        </p>
                    </div>

                </article>


                {/* CARD 2 */}
                <article className="card-servico">

                    <div className="card-imagem">

                        {imagemAtual[1] === "antes" ? (
                            <img
                                src={antes2}
                                alt="Couro antes da restauração"
                            />
                        ) : (
                            <img
                                src={depois2}
                                alt="Couro depois da restauração"
                            />
                        )}

                        <span className="imagem-label">
                            {imagemAtual[1] === "antes"
                                ? "ANTES"
                                : "DEPOIS"}
                        </span>

                        <button onClick={() => alternarImagem(1)}>
                            {imagemAtual[1] === "antes"
                                ? "Ver depois →"
                                : "← Ver antes"}
                        </button>

                    </div>

                    <div className="card-info">
                        <span>RESTAURAÇÃO</span>
                        <h2>Restauração de Couro</h2>
                        <p>
                            Tratamento e revitalização do couro.
                        </p>
                    </div>

                </article>


                {/* CARD 3 */}
                <article className="card-servico">

                    <div className="card-imagem">

                        {imagemAtual[2] === "antes" ? (
                            <img
                                src={antes3}
                                alt="Interior automotivo antes da restauração"
                            />
                        ) : (
                            <img
                                src={depois3}
                                alt="Interior automotivo depois da restauração"
                            />
                        )}

                        <span className="imagem-label">
                            {imagemAtual[2] === "antes"
                                ? "ANTES"
                                : "DEPOIS"}
                        </span>

                        <button onClick={() => alternarImagem(2)}>
                            {imagemAtual[2] === "antes"
                                ? "Ver depois →"
                                : "← Ver antes"}
                        </button>

                    </div>

                    <div className="card-info">
                        <span>RESTAURAÇÃO</span>
                        <h2>Interior Automotivo</h2>
                        <p>
                            Restauração de interiores de carros clássicos.
                        </p>
                    </div>

                </article>


                {/* CARD 4 */}
                <article className="card-servico">

                    <div className="card-imagem">

                        {imagemAtual[3] === "antes" ? (
                            <img
                                src={antes4}
                                alt="Interior automotivo antes da restauração"
                            />
                        ) : (
                            <img
                                src={depois4}
                                alt="Interior automotivo depois da restauração"
                            />
                        )}

                        <span className="imagem-label">
                            {imagemAtual[3] === "antes"
                                ? "ANTES"
                                : "DEPOIS"}
                        </span>

                        <button onClick={() => alternarImagem(2)}>
                            {imagemAtual[3] === "antes"
                                ? "Ver depois →"
                                : "← Ver antes"}
                        </button>

                    </div>

                    <div className="card-info">
                        <span>RESTAURAÇÃO</span>
                        <h2>Interior Automotivo</h2>
                        <p>
                            Restauração de interiores de carros clássicos.
                        </p>
                    </div>

                </article>

            </section>

        </main>
    );
}