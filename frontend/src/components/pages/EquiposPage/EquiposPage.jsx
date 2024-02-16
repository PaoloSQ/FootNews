import React from 'react'

import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'

import style from './EquiposPage.module.scss'
import SectionLigas from './SectionLigas/SectionLigas'

const HomePage = () => {
  return (
    <>
      <Header />
      <main className={`${style.main} d-flex flex-column py-4`}>
        <SectionLigas />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
