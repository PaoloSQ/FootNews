import React, { useState, useEffect } from 'react'
import Header from '@components/layout/Header/Header'
import Footer from '@components/layout/Footer/Footer'

import DetailBanner from '@common/DetailBanner/DetailBanner'
import DetailNav from '@common/DetailNav/DetailNav'

import SectionNoticias from '@layout/Details/SectionNoticias/SectionNoticias'
import SectionPartidos from '@layout/Details/SectionPartidos/SectionPartidos'
import SectionClasificacion from '@layout/Details/SectionClasificacion/SectionClasificacion'

const CompeticionesPage = () => {
  const [currentSection, setCurrentSection] = useState('Clasificacion')
  const [noticiasData, setNoticiasData] = useState([])
  const [partidosData, setPartidosData] = useState([])
  const [clasificacionData, setClasificacionData] = useState([])

  const handleSectionChange = (section) => {
    setCurrentSection(section)
  }

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 100))

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

      setNoticiasData(noticiasObject)

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

      setPartidosData(partidosObject)

      const clasificacionObject = [
        {
          rank: 1,
          team_id: 33,
          teamName: 'Manchester United',
          logo: 'https://media.api-sports.io/football/teams/33.png',
          group: 'A',
          forme: 'WLDWW',
          status: 'same',
          description: 'Promotion - Champions League (Group Stage)',
          all: {
            matchsPlayed: 28,
            win: 18,
            draw: 6,
            lose: 4,
            goalsFor: 62,
            goalsAgainst: 28,
          },
          home: {
            matchsPlayed: 14,
            win: 10,
            draw: 3,
            lose: 1,
            goalsFor: 30,
            goalsAgainst: 12,
          },
          away: {
            matchsPlayed: 14,
            win: 8,
            draw: 3,
            lose: 3,
            goalsFor: 32,
            goalsAgainst: 16,
          },
          goalsDiff: 34,
          points: 60,
          lastUpdate: '2023-12-31',
        },
        {
          rank: 2,
          team_id: 42,
          teamName: 'FC Barcelona',
          logo: 'https://media.api-sports.io/football/teams/42.png',
          group: 'A',
          forme: 'WWDWL',
          status: 'same',
          description: 'Promotion - Champions League (Group Stage)',
          all: {
            matchsPlayed: 28,
            win: 16,
            draw: 7,
            lose: 5,
            goalsFor: 58,
            goalsAgainst: 34,
          },
          home: {
            matchsPlayed: 14,
            win: 9,
            draw: 4,
            lose: 1,
            goalsFor: 32,
            goalsAgainst: 15,
          },
          away: {
            matchsPlayed: 14,
            win: 7,
            draw: 3,
            lose: 4,
            goalsFor: 26,
            goalsAgainst: 19,
          },
          goalsDiff: 24,
          points: 55,
          lastUpdate: '2023-12-31',
        },
        {
          rank: 3,
          team_id: 13,
          teamName: 'Real Madrid',
          logo: 'https://media.api-sports.io/football/teams/13.png',
          group: 'A',
          forme: 'WDLWL',
          status: 'same',
          description: 'Promotion - Champions League (Group Stage)',
          all: {
            matchsPlayed: 28,
            win: 15,
            draw: 6,
            lose: 7,
            goalsFor: 50,
            goalsAgainst: 38,
          },
          home: {
            matchsPlayed: 14,
            win: 8,
            draw: 4,
            lose: 2,
            goalsFor: 28,
            goalsAgainst: 16,
          },
          away: {
            matchsPlayed: 14,
            win: 7,
            draw: 2,
            lose: 5,
            goalsFor: 22,
            goalsAgainst: 22,
          },
          goalsDiff: 12,
          points: 51,
          lastUpdate: '2023-12-31',
        },
      ]
      setClasificacionData(clasificacionObject)
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
          sections={['Noticias', 'Partidos', 'Clasificacion']}
          initialActiveSection={currentSection}
          onSectionChange={handleSectionChange}
        />
        {currentSection === 'Noticias' && (
          <SectionNoticias noticias={noticiasData} />
        )}
        {currentSection === 'Partidos' && (
          <SectionPartidos partidos={partidosData} />
        )}
        {currentSection === 'Clasificacion' && (
          <SectionClasificacion clasificacion={clasificacionData} />
        )}
      </main>
      <Footer />
    </>
  )
}

export default CompeticionesPage
