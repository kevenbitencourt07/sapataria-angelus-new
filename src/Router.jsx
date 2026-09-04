import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Servicos from './pages/Servicos'
import Catalogo from './pages/Catalogo'
import Contato from './pages/Contato'
import NotFound from './pages/NotFoud'
import Users from "./pages/Users"
import Menu from "./components/Menu"
import Footer from "./components/Footer"
import Cadastro from "./pages/Cadastro"
import Comentario from "./pages/Comentario"



export default function Router() {
  return (
    <BrowserRouter>

       <Menu />

        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/comentario" element={<Comentario />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<NotFound />} />

        </Routes>
        
       <Footer />

    </BrowserRouter>
  )
}