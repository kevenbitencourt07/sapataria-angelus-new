import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Menu from "./components/Menu"



export default function Router() {
  return (
    <BrowserRouter>

       <Menu />

        <Routes>

            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />

        </Routes>
    </BrowserRouter>
  )
}