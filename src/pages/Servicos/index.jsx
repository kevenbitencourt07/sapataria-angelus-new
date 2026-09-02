import React from "react";
import "./Servicos.css";

export default function Servicos() {

    const servicos = [
        {
            nome: "Restauração de Bolsas",
            descricao: "Recuperação do couro, limpeza, hidratação e acabamento.",
            preco: "A partir de R$ 150"
        },
        {
            nome: "Restauração de Sapatos",
            descricao: "Revitalização completa do couro e acabamento artesanal.",
            preco: "A partir de R$ 100"
        },
        {
            nome: "Hidratação de Couro",
            descricao: "Tratamento para recuperar a maciez e preservar o couro.",
            preco: "A partir de R$ 70"
        },
        {
            nome: "Pintura e Tingimento",
            descricao: "Alteração ou recuperação da cor original da peça.",
            preco: "A partir de R$ 120"
        },
        {
            nome: "Restauração Automotiva",
            descricao: "Recuperação de bancos e interiores em couro.",
            preco: "A partir de R$ 300"
        },
        {
            nome: "Limpeza de Couro",
            descricao: "Limpeza profunda e tratamento especializado.",
            preco: "A partir de R$ 80"
        }
    ];

    return (
        <main className="servicos">

            <section className="servicos-header">
                <span>ANGELU'S</span>

                <h1>
                    Nossos <em>Serviços</em>
                </h1>

                <p>
                    Técnicas artesanais para preservar, restaurar
                    e valorizar cada peça.
                </p>
            </section>

            <section className="tabela-container">

                <div className="tabela">

                    <div className="tabela-topo">
                        <span>01</span>
                        <span>SERVIÇO</span>
                        <span>DESCRIÇÃO</span>
                        <span>VALOR</span>
                    </div>

                    {servicos.map((servico, index) => (

                        <div className="servico-linha" key={servico.nome}>

                            <span className="numero-servico">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <h2>
                                {servico.nome}
                            </h2>

                            <p>
                                {servico.descricao}
                            </p>

                            <strong>
                                {servico.preco}
                            </strong>

                        </div>

                    ))}

                </div>

            </section>

            <section className="servicos-final">

                <div></div>

                <p>
                    Os valores podem variar de acordo com o estado
                    e o tamanho da peça.
                </p>

            </section>

        </main>
    );
}