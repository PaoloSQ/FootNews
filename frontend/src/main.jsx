import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/HomePage/HomePage'
import Partidos from './components/pages/PartidosPage/PartidosPage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/partidos' element={<Partidos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
