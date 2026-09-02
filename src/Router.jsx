import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Servicos from './pages/Servicos'
import Catalogo from './pages/Catalogo'
import Menu from "./components/Menu"
import Footer from "./components/Footer"



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

        </Routes>
        
       <Footer />

    </BrowserRouter>
  )
}