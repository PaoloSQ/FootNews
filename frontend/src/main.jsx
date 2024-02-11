import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/HomePage/HomePage'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/partidos' element={<Partidos />} /> */}
        {/* <Route path='/equipos' element={<Equipos />} /> */}
        {/* <Route path='/competencias' element={<Competencias />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
)
