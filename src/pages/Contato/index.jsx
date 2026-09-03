import React from "react";
import "./Contato.css";

export default function Contato() {
    return (
        <main className="contato">

            <section className="contato-header">
                <span>ANGELU'S</span>

                <h1>
                    Entre em <em>Contato</em>
                </h1>

                <p>
                    Tem uma peça que precisa de cuidados?
                    Fale conosco e solicite uma avaliação.
                </p>
            </section>

            <section className="contato-conteudo">

                <div className="contato-info">

                    <div className="contato-item">
                        <span>01</span>
                        <div>
                            <small>WHATSAPP</small>
                            <h2>(11) 98597-3447</h2>
                        </div>
                    </div>

                    <div className="contato-item">
                        <span>02</span>
                        <div>
                            <small>EMAIL</small>
                            <h2>angelus95@gmail.com</h2>
                        </div>
                    </div>                   

                    <div className="contato-item">
                        <span>03</span>
                        <div>
                            <small>INSTAGRAM</small>
                            <h2>@angelus.sapatariaArtesanal</h2>
                        </div>
                    </div>

                    <div className="contato-item">
                        <span>04</span>
                        <div>
                            <small>LOCALIZAÇÃO</small>
                            <h2>Cotia - SP</h2>
                        </div>
                    </div>

                    <div className="contato-item">
                        <span>05</span>
                        <div>
                            <small>HORÁRIO</small>
                            <h2>Seg. a Qui. - 08h às 18h</h2>
                            <h2>Sex. - 07h às 17h</h2>
                        </div>
                    </div>

                </div>

                <div className="contato-mensagem">

                    <span>FALE CONOSCO</span>

                    <h2>
                        Solicite sua
                        <br />
                        <em>avaliação.</em>
                    </h2>

                    <p>
                        Entre em contato para saber mais sobre nossos
                        serviços, valores e possibilidades de restauração.
                    </p>

                    <a
                        href="https://wa.me/5511999999999"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Falar pelo WhatsApp →
                    </a>

                </div>

            </section>

        </main>
    );
}