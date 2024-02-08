import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/HomePage/HomePage'
// import Partidos from './pages/Partidos'
// import Equipos from './pages/Equipos'
// import Competencias from './pages/Competencias'
// import HomePage from './components/pages/HomePage/HomePage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/partidos' element={<Partidos />} />
          <Route path='/equipos' element={<Equipos />} />
          <Route path='/competencias' element={<Competencias />} /> */}
      </Routes>
    </Router>
  )
}

export default App
