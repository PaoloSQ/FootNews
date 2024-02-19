import React from 'react'

import Header from '@components/layout/Header/Header'
import Footer from '@components/layout/Footer/Footer'

import SectionNew from './SectionNew/SectionNew'
import FilterBar from './FilterBar/FilterBar'
import SectionPartidos from './SectionPartidos/SectionPartidos'

import style from './PartidosPage.module.scss'

const HomePage = () => {
  return (
    <>
      <Header />
      <main className={`${style.main}`}>
        <SectionNew />
        <FilterBar />
        <SectionPartidos />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
