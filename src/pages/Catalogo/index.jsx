import React, { useState } from "react";
import "./Catalogo.css";

// Imagens
import antes1 from "../../assets/img/antes1.jpeg";
import depois1 from "../../assets/img/depois1.jpeg";

import antes2 from "../../assets/img/antes2.jpeg";
import depois2 from "../../assets/img/depois2.jpeg";

import antes3 from "../../assets/img/antes3.jpeg";
import depois3 from "../../assets/img/depois3.jpeg";

import antes4 from "../../assets/img/antes4.jpeg";
import depois4 from "../../assets/img/depois4.jpeg";

export default function Catalogo() {

    const servicos = [
        {
            nome: "Restauração de Bolsa",
            descricao: "Recuperação e renovação completa do couro.",
            antes: antes1,
            depois: depois1
        },
        {
            nome: "Pintura e Tingimento",
            descricao: "Alteração ou recuperação da cor original da peça.",
            antes: antes2,
            depois: depois2
        },
        {
            nome: "Limpeza de Couro",
            descricao: "Limpeza profunda e tratamento especializado.",
            antes: antes3,
            depois: depois3
        },
        {
            nome: "Interior Automotivo",
            descricao: "Restauração de interiores de carros clássicos.",
            antes: antes4,
            depois: depois4
        }
    ];

    // Todos os cards começam mostrando "ANTES"
    const [imagemAtual, setImagemAtual] = useState(
        servicos.map(() => "antes")
    );

    // Alterna somente o card clicado
    const alternarImagem = (index) => {
        setImagemAtual((prev) =>
            prev.map((imagem, i) =>
                i === index
                    ? imagem === "antes"
                        ? "depois"
                        : "antes"
                    : imagem
            )
        );
    };

    return (
        <main className="catalogo">

            {/* CABEÇALHO */}
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


            {/* CARDS */}
            <section className="catalogo-grid">

                {servicos.map((servico, index) => (

                    <article
                        className="card-servico"
                        key={servico.nome}
                    >

                        {/* IMAGEM */}
                        <div className="card-imagem">

                            <img
                                src={
                                    imagemAtual[index] === "antes"
                                        ? servico.antes
                                        : servico.depois
                                }
                                alt={
                                    imagemAtual[index] === "antes"
                                        ? `${servico.nome} antes da restauração`
                                        : `${servico.nome} depois da restauração`
                                }
                            />

                            {/* LABEL ANTES / DEPOIS */}
                            <span className="imagem-label">
                                {imagemAtual[index] === "antes"
                                    ? "ANTES"
                                    : "DEPOIS"}
                            </span>

                            {/* BOTÃO */}
                            <button
                                type="button"
                                onClick={() => alternarImagem(index)}
                            >
                                {imagemAtual[index] === "antes"
                                    ? "Ver depois →"
                                    : "← Ver antes"}
                            </button>

                        </div>


                        {/* INFORMAÇÕES */}
                        <div className="card-info">

                            <span>RESTAURAÇÃO</span>

                            <h2>
                                {servico.nome}
                            </h2>

                            <p>
                                {servico.descricao}
                            </p>

                        </div>

                    </article>

                ))}

            </section>

        </main>
    );
}