import React, { useState } from 'react'
import Header from '@components/layout/Header/Header'
import Footer from '@components/layout/Footer/Footer'

import DetailBanner from '@common/DetailBanner/DetailBanner'
import DetailNav from '@common/DetailNav/DetailNav'

import SectionNoticias from './SectionNoticias/SectionNoticias'
import SectionPartidos from './SectionPartidos/SectionPartidos'
import SectionClasificacion from './SectionClasificacion/SectionClasificacion'

import styles from './CompeticionesPage.module.scss'

const EquipoPage = () => {
  const [currentSection, setCurrentSection] = useState('Noticias')

  const handleSectionChange = (section) => {
    setCurrentSection(section)
  }

  return (
    <>
      <Header />
      <main>
        <DetailBanner
          detailName={'REAL MADRID'}
          imageURL={
            'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png'
          }
        />
        <DetailNav
          sections={['Noticias', 'Partidos', 'Clasificacion']}
          initialActiveSection={currentSection}
          onSectionChange={handleSectionChange}
        />
        {currentSection === 'Noticias' && <SectionNoticias />}
        {currentSection === 'Partidos' && <SectionPartidos />}
        {currentSection === 'Clasificacion' && <SectionClasificacion />}
      </main>
      <Footer />
    </>
  )
}

export default EquipoPage
