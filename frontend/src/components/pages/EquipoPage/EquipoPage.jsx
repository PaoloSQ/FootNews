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
  const [jugadoresData, setJugadoresData] = useState([])
  const [transferenciasData, setTransferenciasData] = useState([])

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

      const jugadoresObject = [
        {
          id: 20319,
          name: 'N. Bishop',
          age: 22,
          number: 30,
          position: 'Goalkeeper',
          photo: 'https://media.api-sports.io/football/players/20319.png',
        },
        {
          id: 882,
          name: 'David de Gea',
          age: 31,
          number: 1,
          position: 'Goalkeeper',
          photo: 'https://media.api-sports.io/football/players/882.png',
        },
        {
          id: 883,
          name: 'L. Grant',
          age: 38,
          number: 13,
          position: 'Goalkeeper',
          photo: 'https://media.api-sports.io/football/players/883.png',
        },
        {
          id: 2931,
          name: 'T. Heaton',
          age: 35,
          number: null,
          position: 'Goalkeeper',
          photo: 'https://media.api-sports.io/football/players/2931.png',
        },
        {
          id: 19088,
          name: 'D. Henderson',
          age: 24,
          number: 26,
          position: 'Goalkeeper',
          photo: 'https://media.api-sports.io/football/players/19088.png',
        },
        {
          id: 885,
          name: 'E. Bailly',
          age: 27,
          number: 3,
          position: 'Defender',
          photo: 'https://media.api-sports.io/football/players/885.png',
        },
        {
          id: 886,
          name: 'Diogo Dalot',
          age: 22,
          number: 20,
          position: 'Defender',
          photo: 'https://media.api-sports.io/football/players/886.png',
        },
        {
          id: 153434,
          name: 'W. Fish',
          age: 18,
          number: 48,
          position: 'Defender',
          photo: 'https://media.api-sports.io/football/players/153434.png',
        },
        {
          id: 888,
          name: 'P. Jones',
          age: 29,
          number: 4,
          position: 'Defender',
          photo: 'https://media.api-sports.io/football/players/888.png',
        },
        {
          id: 138775,
          name: 'E. Laird',
          age: 20,
          number: null,
          position: 'Defender',
          photo: 'https://media.api-sports.io/football/players/138775.png',
        },
        {
          id: 2935,
          name: 'H. Maguire',
          age: 28,
          number: 5,
          position: 'Defender',
          photo: 'https://media.api-sports.io/football/players/2935.png',
        },
        {
          id: 889,
          name: 'V. Lindelöf',
          age: 27,
          number: 2,
          position: 'Defender',
          photo: 'https://media.api-sports.io/football/players/889.png',
        },
        {
          id: 891,
          name: 'L. Shaw',
          age: 26,
          number: 23,
          position: 'Defender',
          photo: 'https://media.api-sports.io/football/players/891.png',
        },
        {
          id: 378,
          name: 'Alex Telles',
          age: 29,
          number: 27,
          position: 'Defender',
          photo: 'https://media.api-sports.io/football/players/378.png',
        },
        {
          id: 19182,
          name: 'A. Tuanzebe',
          age: 24,
          number: 38,
          position: 'Defender',
          photo: 'https://media.api-sports.io/football/players/19182.png',
        },
        {
          id: 18846,
          name: 'A. Wan-Bissaka',
          age: 24,
          number: 29,
          position: 'Defender',
          photo: 'https://media.api-sports.io/football/players/18846.png',
        },
        {
          id: 138806,
          name: 'B. Williams',
          age: 21,
          number: 33,
          position: 'Defender',
          photo: 'https://media.api-sports.io/football/players/138806.png',
        },
        {
          id: 1485,
          name: 'Bruno Fernandes',
          age: 27,
          number: 18,
          position: 'Midfielder',
          photo: 'https://media.api-sports.io/football/players/1485.png',
        },
        {
          id: 906,
          name: 'T. Chong',
          age: 22,
          number: 44,
          position: 'Midfielder',
          photo: 'https://media.api-sports.io/football/players/906.png',
        },
        {
          id: 895,
          name: 'J. Garner',
          age: 20,
          number: null,
          position: 'Midfielder',
          photo: 'https://media.api-sports.io/football/players/895.png',
        },
        {
          id: 899,
          name: 'Andreas Pereira',
          age: 25,
          number: 15,
          position: 'Midfielder',
          photo: 'https://media.api-sports.io/football/players/899.png',
        },
        {
          id: 900,
          name: 'J. Lingard',
          age: 29,
          number: 14,
          position: 'Midfielder',
          photo: 'https://media.api-sports.io/football/players/900.png',
        },
        {
          id: 901,
          name: 'Mata',
          age: 33,
          number: 8,
          position: 'Midfielder',
          photo: 'https://media.api-sports.io/football/players/901.png',
        },
        {
          id: 902,
          name: 'N. Matić',
          age: 33,
          number: 31,
          position: 'Midfielder',
          photo: 'https://media.api-sports.io/football/players/902.png',
        },
        {
          id: 903,
          name: 'S. McTominay',
          age: 25,
          number: 39,
          position: 'Midfielder',
          photo: 'https://media.api-sports.io/football/players/903.png',
        },
        {
          id: 180560,
          name: 'H. Mejbri',
          age: 18,
          number: 46,
          position: 'Midfielder',
          photo: 'https://media.api-sports.io/football/players/180560.png',
        },
        {
          id: 904,
          name: 'P. Pogba',
          age: 28,
          number: 6,
          position: 'Midfielder',
          photo: 'https://media.api-sports.io/football/players/904.png',
        },
        {
          id: 905,
          name: 'Fred',
          age: 28,
          number: 17,
          position: 'Midfielder',
          photo: 'https://media.api-sports.io/football/players/905.png',
        },
        {
          id: 163054,
          name: 'S. Shoretire',
          age: 17,
          number: 74,
          position: 'Midfielder',
          photo: 'https://media.api-sports.io/football/players/163054.png',
        },
        {
          id: 547,
          name: 'D. van de Beek',
          age: 24,
          number: 34,
          position: 'Midfielder',
          photo: 'https://media.api-sports.io/football/players/547.png',
        },
        {
          id: 138814,
          name: 'E. Galbraith',
          age: 20,
          number: null,
          position: 'Midfielder',
          photo: 'https://media.api-sports.io/football/players/138814.png',
        },
        {
          id: 274,
          name: 'E. Cavani',
          age: 34,
          number: 7,
          position: 'Attacker',
          photo: 'https://media.api-sports.io/football/players/274.png',
        },
        {
          id: 153430,
          name: 'A. Elanga',
          age: 19,
          number: 56,
          position: 'Attacker',
          photo: 'https://media.api-sports.io/football/players/153430.png',
        },
        {
          id: 897,
          name: 'M. Greenwood',
          age: 20,
          number: 11,
          position: 'Attacker',
          photo: 'https://media.api-sports.io/football/players/897.png',
        },
        {
          id: 19329,
          name: 'D. James',
          age: 24,
          number: 21,
          position: 'Attacker',
          photo: 'https://media.api-sports.io/football/players/19329.png',
        },
        {
          id: 908,
          name: 'A. Martial',
          age: 26,
          number: 9,
          position: 'Attacker',
          photo: 'https://media.api-sports.io/football/players/908.png',
        },
        {
          id: 909,
          name: 'M. Rashford',
          age: 24,
          number: 10,
          position: 'Attacker',
          photo: 'https://media.api-sports.io/football/players/909.png',
        },
        {
          id: 157997,
          name: 'A. Diallo',
          age: 19,
          number: 19,
          position: 'Attacker',
          photo: 'https://media.api-sports.io/football/players/157997.png',
        },
      ]

      setJugadoresData(jugadoresObject)

      const TranferenciasObject = [
        {
          fecha: '2023-07-01',
          tipo: 'Traspaso',
          dinero: '€100M',
          equipoOrigen: {
            id: 13,
            nombre: 'Real Madrid',
            logo: 'https://media.api-sports.io/football/teams/13.png',
          },
          equipoDestino: {
            id: 44,
            nombre: 'Manchester City',
            logo: 'https://media.api-sports.io/football/teams/44.png',
          },
          jugador: {
            id: 202856,
            nombre: 'K. De Bruyne',
          },
        },
        {
          fecha: '2023-06-30',
          tipo: 'Cesión',
          dinero: '€10M',
          equipoOrigen: {
            id: 42,
            nombre: 'FC Barcelona',
            logo: 'https://media.api-sports.io/football/teams/42.png',
          },
          equipoDestino: {
            id: 45,
            nombre: 'Everton',
            logo: 'https://media.api-sports.io/football/teams/45.png',
          },
          jugador: {
            id: 280031,
            nombre: 'C. Lenglet',
          },
        },
        {
          fecha: '2023-05-31',
          tipo: 'Libre',
          dinero: '€0',
          equipoOrigen: {
            id: 11,
            nombre: 'Chelsea FC',
            logo: 'https://media.api-sports.io/football/teams/11.png',
          },
          equipoDestino: {
            id: 42,
            nombre: 'FC Barcelona',
            logo: 'https://media.api-sports.io/football/teams/42.png',
          },
          jugador: {
            id: 17658,
            nombre: 'A. Christensen',
          },
        },
        {
          fecha: '2023-05-25',
          tipo: 'Traspaso',
          dinero: '€30M',
          equipoOrigen: {
            id: 40,
            nombre: 'Liverpool FC',
            logo: 'https://media.api-sports.io/football/teams/40.png',
          },
          equipoDestino: {
            id: 33,
            nombre: 'Manchester United',
            logo: 'https://media.api-sports.io/football/teams/33.png',
          },
          jugador: {
            id: 158023,
            nombre: 'S. Mané',
          },
        },
        {
          fecha: '2023-05-20',
          tipo: 'Traspaso',
          dinero: '€80M',
          equipoOrigen: {
            id: 33,
            nombre: 'Manchester United',
            logo: 'https://media.api-sports.io/football/teams/33.png',
          },
          equipoDestino: {
            id: 13,
            nombre: 'Real Madrid',
            logo: 'https://media.api-sports.io/football/teams/13.png',
          },
          jugador: {
            id: 202856,
            nombre: 'R. Varane',
          },
        },
      ]

      setTransferenciasData(() => {
        TranferenciasObject.sort((a, b) => {
          return new Date(a.fecha) - new Date(b.fecha)
        })
        return TranferenciasObject
      })
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
        {currentSection === 'Plantilla' && (
          <SectionPlantilla jugadores={jugadoresData} />
        )}
        {currentSection === 'Transferencias' && (
          <SectionTransferencias transferencias={transferenciasData} />
        )}
      </main>
      <Footer />
    </>
  )
}

export default EquipoPage
