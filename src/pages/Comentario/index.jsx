import { useEffect, useState } from "react"
import "./Comentario.css"

export default function index() {

    const [comentarios, setComentarios] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/comments")
        .then((response) => response.json())
        .then((data) => setComentarios(data))
        .catch((error) => console.error("Erro na API", error))
    }, [])

    console.log(comentarios)

  return (
        <main className="contentComentario">

            <section className="containerComentario">
                {comentarios.map((user) =>(
                    <article key={user.id}>

                    <strong>{Number(user.nota).toFixed(1)}</strong>

                    <h4>{user.nome}</h4>
                    <p>{user.text}</p>
                </article>
                ))}
                
            </section>
        </main>
  )
}

// alt={`Foto de ${user.nome}`}