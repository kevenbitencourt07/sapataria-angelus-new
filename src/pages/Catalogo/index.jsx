import React, { useState } from "react";
import "./Catalogo.css";

export default function Catalogo() {

    const servicos = [
        {
            nome: "Restauração de Bolsa",
            descricao: "Recuperação e renovação completa do couro.",
            antes: "/assets/antes1.jpg",
            depois: "/assets/depois1.jpg"
        },
        {
            nome: "Restauração de Couro",
            descricao: "Tratamento e revitalização do couro.",
            antes: "/assets/antes2.jpg",
            depois: "/assets/depois2.jpg"
        },
        {
            nome: "Interior Automotivo",
            descricao: "Restauração de interiores de carros clássicos.",
            antes: "/assets/antes3.jpg",
            depois: "/assets/depois3.jpg"
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

                {servicos.map((servico, index) => (

                    <article className="card-servico" key={servico.nome}>

                        <div className="card-imagem">

                            <img
                                src={
                                    imagemAtual[index] === "antes"
                                        ? servico.antes
                                        : servico.depois
                                }
                                alt={`${servico.nome} - ${imagemAtual[index]}`}
                            />

                            <span className="imagem-label">
                                {imagemAtual[index] === "antes"
                                    ? "ANTES"
                                    : "DEPOIS"}
                            </span>

                            <button
                                onClick={() => alternarImagem(index)}
                            >
                                {imagemAtual[index] === "antes"
                                    ? "Ver depois →"
                                    : "← Ver antes"}
                            </button>

                        </div>

                        <div className="card-info">

                            <span>RESTAURAÇÃO</span>

                            <h2>{servico.nome}</h2>

                            <p>{servico.descricao}</p>

                        </div>

                    </article>

                ))}

            </section>

        </main>
    );
}