import React, { useState } from 'react'
import { Container, Col } from 'react-bootstrap'
import { BsArrowRight } from 'react-icons/bs'

import styles from './SectionPartidos.module.scss'
import CompetitionInfo from '@common/CompetitionInfo/CompetitionInfo'
import Partido from '@common/Partido/Partido'

const partidosJson = [
  {
    equipoLocal: {
      nombre: 'FC Cartagena',
      marcador: 1,
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png',
    },
    equipoVisitante: {
      nombre: 'SD Eibar',
      marcador: 0,
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png',
    },
    estadoPartido: 'FT',
  },
  {
    equipoLocal: {
      nombre: 'Real Madrid',
      marcador: 2,
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png',
    },
    equipoVisitante: {
      nombre: 'Almería',
      marcador: 1,
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png',
    },
    estadoPartido: 'FT',
  },
  {
    equipoLocal: {
      nombre: 'Valencia CF',
      marcador: 0,
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png',
    },
    equipoVisitante: {
      nombre: 'Athletic Club',
      marcador: 1,
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png',
    },
    estadoPartido: 'FT',
  },
  {
    equipoLocal: {
      nombre: 'Sevilla FC',
      marcador: 2,
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png',
    },
    equipoVisitante: {
      nombre: 'Girona FC',
      marcador: 1,
      logo: 'https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png',
    },
    estadoPartido: 'FT',
  },
]

const SectionPartidos = () => {
  const [partidos] = useState(partidosJson)

  return (
    <Container fluid className='text-white d-flex flex-column h-100'>
      <CompetitionInfo
        image='https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png'
        competition='LaLiga'
        round='Jornada 25'
      />
      <Container className={`${styles.partidosContainer} d-flex flex-wrap`}>
        {partidos.map((partido) => (
          <Col
            className={'p-3'}
            key={partido.equipoLocal.nombre}
            xs={12}
            md={6}
            lg={4}>
            <Partido {...partido} />
          </Col>
        ))}
      </Container>
      <Container className='mt-auto justify-content-center'>
        <a href='#' className='text-muted'>
          Ir a las clasificaciones <BsArrowRight />
        </a>
      </Container>
    </Container>
  )
}

export default SectionPartidos
