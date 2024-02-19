import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

import Home from './components/pages/HomePage/HomePage'
import Partidos from './components/pages/PartidosPage/PartidosPage'
import EquipoPage from './components/pages/EquipoPage/EquipoPage'
import SectionClasificacion from './components/pages/CompeticionesPage/CompeticionesPage'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />

          <Route path='/' element={<Home />} />
          <Route path='/partidos' element={<Partidos />} />
          <Route path='/equipo/:Params' element={<EquipoPage />} />
          <Route
            path='/competicion/:Params'
            element={<SectionClasificacion />}
          />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
)
