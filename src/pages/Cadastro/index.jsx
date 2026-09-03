import React, { useState } from 'react'
import "./Cadastro.css"

export default function index() {
    // Estado para armazenar os dados do formulário
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: ""
    })

    // Função para atualizar o estado ao digitar no formulário
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    //Função para enviar o formulário
    const handleSubmit = (e) => {
        e.preventDefault()

        // Validação caso o usuário não digite nada
        if (
            formData.nome.trim() === "" ||
            formData.email.trim() === "" ||
            formData.telefone.trim() === ""
        ) {
        alert("Preencha todos os campos!");
        return;
        }
    

        // Enviando os dados para o backend com JSON
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
         })
         .then((response) => response.json())
         .then((data) => {
            console.log("Usuário cadastrado com sucesso!", data);
            // Limpa o formulário após o envio
            setFormData({
                nome: "",
                email: "",
                telefone: ""
            })
         })
    }

  return (
    <main className="containerCadastro">
        <span className="cabecalho">ANGELU'S</span>
        <h1>Seja Sócio!</h1>
        <form onSubmit={handleSubmit}>
            <article className='form-control'>
                <label htmlFor="nome">Nome</label>
                <input 
                    type="text" 
                    name="nome"
                    placeholder='Digite seu Nome'
                    value={formData.nome} 
                    onChange={handleChange}
                />
            </article>


            <article className='form-control'>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email"
                    placeholder='Digite seu Email'
                    value={formData.email} 
                    onChange={handleChange}
                />
            </article>

            <article className='form-control'>
                <label htmlFor="telefone">Telefone</label>
                <input 
                    type="tel" 
                    name="telefone"
                    placeholder='Digite seu Telefone'
                    value={formData.telefone} 
                    onChange={handleChange}
                />
            </article>
            <br />
            <button>Cadastrar</button>
        </form>
    </main>
  )
}
