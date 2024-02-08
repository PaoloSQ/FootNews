import React from 'react'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import styles from './HomePage.module.scss'

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
