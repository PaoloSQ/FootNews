import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/HomePage/HomePage'
import Partidos from './components/pages/PartidosPage/PartidosPage'
import Equipos from './components/pages/EquiposPage/EquiposPage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'animate.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/partidos' element={<Partidos />} />
        <Route path='/equipos' element={<Equipos />} />
        {/* <Route path='/competencias' element={<Competencias />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
)
