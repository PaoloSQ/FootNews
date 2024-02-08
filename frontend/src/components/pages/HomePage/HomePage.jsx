import styles from './HomePage.module.scss'
import React from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Contenido principal de la página irá aquí */}
        <h1>Bienvenido a la página de inicio</h1>
        {/* Aquí irán más elementos */}
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
