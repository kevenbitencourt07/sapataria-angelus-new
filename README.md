# ✦ Angelu's — Sapataria Artesanal

<p align="center">
  <strong>Elegância artesanal em cada detalhe.</strong>
</p>

<p align="center">
  Site desenvolvido para uma empresa especializada em restauração e cuidados com couro.
</p>

---

## 📖 Sobre o projeto

O **Angelu's** é um projeto de website desenvolvido para uma sapataria artesanal especializada em restauração, conservação e revitalização de peças em couro.

O site foi criado com uma proposta visual **elegante, sofisticada e moderna**, utilizando uma identidade baseada em tons de preto, vinho e dourado.

A aplicação apresenta os serviços oferecidos, catálogo de restaurações, informações sobre a empresa, contato e gerenciamento de usuários.

---

## ✨ Funcionalidades

- 🏠 Página inicial
- 📖 Página "Sobre"
- 🛠️ Catálogo de serviços
- 🖼️ Comparação de restaurações "Antes e Depois"
- 📋 Lista de serviços
- 💬 Área de comentários de clientes
- 📞 Página de contato
- 👤 Cadastro de usuários
- 🗃️ Listagem de usuários
- 🗑️ Exclusão de usuários
- ❌ Página personalizada de erro 404
- 📱 Layout responsivo
- 🎨 Identidade visual personalizada

---

## 🛠️ Tecnologias utilizadas

### Front-end

- React
- JavaScript
- HTML5
- CSS3

### Bibliotecas

- React Router DOM

### Back-end / API

- JSON Server
- Fetch API

### Design

- CSS personalizado
- Google Fonts
- Cormorant Garamond

---

## 🎨 Identidade visual

O projeto utiliza uma paleta de cores inspirada em luxo e artesanato:

| Cor | Código |
|---|---|
| 🖤 Preto | `#000000` |
| 🍷 Vinho | `#5b071b` |
| 🟡 Dourado | `#c8943e` |
| 🔴 Vermelho | `#d32f2f` |
| 🟠 Laranja | `#f4511e` |

A tipografia principal utilizada no projeto é:

**Cormorant Garamond**

Ela foi escolhida para transmitir uma aparência clássica e sofisticada.

---

## 📂 Estrutura do projeto

```text
src/
│
├── assets/
│   └── imagens/
│
├── components/
│   ├── Footer/
│   ├── Comentarios/
│   └── ...
│
├── pages/
│   ├── Home/
│   ├── Sobre/
│   ├── Catalogo/
│   ├── Servicos/
│   ├── Contato/
│   ├── Cadastro/
│   ├── Users/
│   └── NotFound/
│
├── App.jsx
└── main.jsx
````

> A estrutura pode variar de acordo com a organização final dos arquivos do projeto.

---

## 🖼️ Catálogo

Uma das principais funcionalidades do site é o catálogo de restaurações.

Cada serviço pode apresentar duas imagens:

```text
ANTES  →  DEPOIS
```

O usuário pode alternar entre as imagens através de um botão, permitindo visualizar o resultado da restauração.

---

## 👤 Sistema de usuários

O projeto também possui uma área para cadastro e gerenciamento de usuários.

Os dados são enviados para uma API local utilizando:

```text
POST /users
```

Exemplo de usuário:

```json
{
  "nome": "João",
  "email": "joao@email.com",
  "telefone": "11999999999"
}
```

Também existe a possibilidade de visualizar os usuários cadastrados e excluí-los.

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/angelus.git
```

### 2. Entre na pasta

```bash
cd angelus
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o projeto React

```bash
npm run dev
```

### 5. Inicie o JSON Server

Caso esteja utilizando o arquivo `db.json`:

```bash
npx json-server --watch db.json --port 3000
```

A API ficará disponível em:

```text
http://localhost:3000
```

E o projeto React normalmente ficará disponível em:

```text
http://localhost:5173
```

---

## 📱 Responsividade

O site foi desenvolvido para funcionar em diferentes tamanhos de tela:

* 💻 Computadores
* 💻 Notebooks
* 📱 Smartphones
* 📟 Tablets

Foram utilizadas media queries em CSS para adaptar o layout.

---

## 🎯 Objetivo

O objetivo do projeto é criar uma presença digital para uma sapataria artesanal, apresentando seus serviços de maneira profissional e valorizando o trabalho de restauração realizado em cada peça.

Além disso, o projeto serve como aplicação prática de conhecimentos em:

* React
* Componentização
* React Router
* CSS
* Consumo de APIs
* CRUD
* Responsividade
* Organização de projetos front-end

---

## 📚 Aprendizados

Durante o desenvolvimento foram trabalhados conceitos como:

```text
React
 ├── Componentes
 ├── Props
 ├── useState
 ├── Eventos
 ├── Formulários
 └── Rotas

CSS
 ├── Flexbox
 ├── Grid
 ├── Responsividade
 ├── Animações
 └── Backgrounds

API
 ├── GET
 ├── POST
 └── DELETE
```

---

## 👨‍💻 Desenvolvedor

**Keven Bitencourt dos Reis**

Projeto desenvolvido como aplicação prática de desenvolvimento web utilizando React.

---

## 📌 Status

🟢 **Em desenvolvimento**

Novas funcionalidades e melhorias visuais podem ser adicionadas futuramente.

---

<p align="center">
  <strong>Angelu's</strong><br>
  <em>Elegância artesanal em cada detalhe.</em>
</p>
```
