import React from 'react'

import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'

import SectionPrincipal from './SectionPrincipal/SectionPrincipal'
import SectionTranferencias from './SectionTransferencias/SectionTransferencias'
import SectionCompetencias from './SectionCompetencias/SectionCompetencias'
import SectionResultados from './SectionResultados/SectionResultados'
import SectionPartidos from './SectionPartidos/SectionPartidos'
import SectionExtras from './SectionExtras/SectionExtras'

import style from './HomePage.module.scss'

const HomePage = () => {
  return (
    <>
      <Header />
      <main className={`${style.main}`}>
        <SectionPrincipal />
        <SectionTranferencias />
        <SectionCompetencias />
        <SectionResultados />
        <SectionPartidos />
        <SectionExtras />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
