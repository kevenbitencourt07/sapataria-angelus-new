import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Users.css"

export default function index() {
    // UseState do react para gerenciar estado dos usuarios
    const [usuarios, setUsuarios] = useState([]);

    // Hook useEffect para lidar com efeitos colaterais no componente

    // useEffect(() => {

    // }, [])

     useEffect(() => {
        fetch("http://localhost:3000/users")
        .then((response) => response.json())
        .then((data) => setUsuarios(data))
        .catch((error) => console.error("Erro na API", error))
    }, [])


    const deletarUsuario = (id) => {
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE",
        })
        .then(() => {
            setUsuarios(usuarios.filter((usuarios) => usuarios.id !== id))
        })
        .catch((error) => console.log(error));
    }


  return (
    <main className="containerUsers">
        <h1>Lista de Usuários</h1>
        <Link to="/">Voltar para HOME</Link>

        <section className="contentUsers">
            {usuarios.map((user) => (
                 <article key={user.id}>
                    <strong>Nome: {user.nome}</strong>
                    <strong>Email: {user.email}</strong>
                    <strong>Telefone: {user.telefone}</strong>
                    <button 
                        className="btn-delete"
                        onClick={() => deletarUsuario(user.id)}
                        >Deletar {user.nome}</button>
                </article>
            ))}
           
        </section>
    </main>
  )
}
