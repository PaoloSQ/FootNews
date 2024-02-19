import React, { useState, useEffect } from 'react'
import Header from '@components/layout/Header/Header'
import Footer from '@components/layout/Footer/Footer'

import DetailBanner from '@common/DetailBanner/DetailBanner'
import DetailNav from '@common/DetailNav/DetailNav'

import SectionNoticias from '@layout/Details/SectionNoticias/SectionNoticias'
import SectionPartidos from '@layout/Details/SectionPartidos/SectionPartidos'
import SectionPlantilla from '@layout/Details/SectionPlantilla/SectionPlantilla'
import SectionTransferencias from '@layout/Details/SectionTransferencias/SectionTransferencias'

const EquipoPage = () => {
  const [currentSection, setCurrentSection] = useState('Noticias')
  const [noticiasData, setNoticiasData] = useState([])
  const [partidosData, setPartidosData] = useState([])

  //SECCION
  const handleSectionChange = (section) => {
    setCurrentSection(section)
  }

  // DATA NOTICIAS
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 10))

      const noticiasObject = [
        {
          imageUrl: 'https://via.placeholder.com/100',
          title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis minus ratione atque animi quidem fuga. Eos eius atque saepe qui?',
          informant: 'Informante 1',
          date: '24/05/2023',
        },
        {
          imageUrl: 'https://via.placeholder.com/100',
          title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis minus ratione atque animi quidem fuga. Eos eius atque saepe qui?',
          informant: 'Informante 1',
          date: '24/05/2023',
        },
        {
          imageUrl: 'https://via.placeholder.com/300',
          title: 'Título de la Entrevista 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis minus ratione atque animi quidem fuga. Eos eius atque saepe qui?',
          informant: 'Informante 2',
          date: '24/05/2023',
        },
        {
          imageUrl: 'https://via.placeholder.com/300',
          title: 'Título de la Entrevista 2',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis minus ratione atque animi quidem fuga. Eos eius atque saepe qui?',
          informant: 'Informante 3',
          date: '24/05/2023',
        },
        {
          imageUrl: 'https://via.placeholder.com/300',
          title: 'Título de la Entrevista 3',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis minus ratione atque animi quidem fuga. Eos eius atque saepe qui?',
          informant: 'Informante 4',
          date: '24/05/2023',
        },
        {
          imageUrl: 'https://via.placeholder.com/300',
          title: 'Título de la Entrevista 4',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis minus ratione atque animi quidem fuga. Eos eius atque saepe qui?',
          informant: 'Informante 5',
          date: '24/05/2023',
        },
        {
          imageUrl: 'https://via.placeholder.com/300',
          title: 'Título de la Entrevista 5',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis minus ratione atque animi quidem fuga. Eos eius atque saepe qui?',
          informant: 'Informante 6',
          date: '24/05/2023',
        },
        {
          imageUrl: 'https://via.placeholder.com/100',
          title: 'Título Noticia 1',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis minus ratione atque animi quidem fuga. Eos eius atque saepe qui?',
          informant: 'Informante 7',
          date: '24/05/2023',
        },
        {
          imageUrl: 'https://via.placeholder.com/100',
          title: 'Título Noticia 2',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis minus ratione atque animi quidem fuga. Eos eius atque saepe qui?',
          informant: 'Informante 8',
          date: '24/05/2023',
        },
      ]

      const partidosObject = {
        Enero: [
          {
            equipoLocal: {
              nombre: 'Equipo A',
              marcador: 2,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            equipoVisitante: {
              nombre: 'Equipo B',
              marcador: 1,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            estadoPartido: '12/12/2012',
          },
          {
            equipoLocal: {
              nombre: 'Equipo C',
              marcador: 1,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            equipoVisitante: {
              nombre: 'Equipo D',
              marcador: 0,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            estadoPartido: 'FT',
          },
          {
            equipoLocal: {
              nombre: 'Equipo C',
              marcador: 1,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            equipoVisitante: {
              nombre: 'Equipo D',
              marcador: 0,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            estadoPartido: 'FT',
          },
        ],
        Febrero: [
          {
            equipoLocal: {
              nombre: 'Equipo E',
              marcador: 3,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            equipoVisitante: {
              nombre: 'Equipo F',
              marcador: 2,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            estadoPartido: 'FT',
          },
          {
            equipoLocal: {
              nombre: 'Equipo G',
              marcador: 0,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            equipoVisitante: {
              nombre: 'Equipo H',
              marcador: 1,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            estadoPartido: 'FT',
          },
          {
            equipoLocal: {
              nombre: 'Equipo E',
              marcador: 3,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            equipoVisitante: {
              nombre: 'Equipo F',
              marcador: 2,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            estadoPartido: 'FT',
          },
          {
            equipoLocal: {
              nombre: 'Equipo G',
              marcador: 0,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            equipoVisitante: {
              nombre: 'Equipo H',
              marcador: 1,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            estadoPartido: 'FT',
          },
        ],
        Marzo: [
          {
            equipoLocal: {
              nombre: 'Equipo I',
              marcador: 2,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            equipoVisitante: {
              nombre: 'Equipo J',
              marcador: 1,
              logo: 'https://cdn.freebiesupply.com/images/large/2x/manchester-city-logo-png-transparent.png',
            },
            estadoPartido: 'FT',
          },
        ],
      }

      setNoticiasData(noticiasObject)
      setPartidosData(partidosObject)
    }
    fetchData()
  }, [])

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
        {currentSection === 'Noticias' && (
          <SectionNoticias noticias={noticiasData} />
        )}
        {currentSection === 'Partidos' && (
          <SectionPartidos partidos={partidosData} />
        )}
        {currentSection === 'Plantilla' && <SectionPlantilla />}
        {currentSection === 'Transferencias' && <SectionTransferencias />}
      </main>
      <Footer />
    </>
  )
}

export default EquipoPage
