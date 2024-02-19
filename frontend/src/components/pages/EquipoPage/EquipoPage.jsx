import React, { useState } from 'react'
import Header from '@components/layout/Header/Header'
import Footer from '@components/layout/Footer/Footer'

import DetailBanner from '@common/DetailBanner/DetailBanner'
import DetailNav from '@common/DetailNav/DetailNav'

import SectionNoticias from './SectionNoticias/SectionNoticias'
import SectionPartidos from './SectionPartidos/SectionPartidos'
import SectionPlantilla from './SectionPlantilla/SectionPlantilla'
import SectionTransferencias from './SectionTransferencias/SectionTransferencias'

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
          sections={['Noticias', 'Partidos', 'Plantilla', 'Transferencias']}
          initialActiveSection={currentSection}
          onSectionChange={handleSectionChange}
        />
        {currentSection === 'Noticias' && <SectionNoticias />}
        {currentSection === 'Partidos' && <SectionPartidos />}
        {currentSection === 'Plantilla' && <SectionPlantilla />}
        {currentSection === 'Transferencias' && <SectionTransferencias />}
      </main>
      <Footer />
    </>
  )
}

export default EquipoPage
