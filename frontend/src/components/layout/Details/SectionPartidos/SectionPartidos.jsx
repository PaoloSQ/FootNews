import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Partido from '@common/Partido/Partido'
import styles from './SectionPartidos.module.scss'
import { BsArrowRight } from 'react-icons/bs'

const SectionPartidos = ({ partidos }) => {
  return (
    <Container className='text-white'>
      <Container className='pt-4 py-2 px-5 d-flex gap-5 align-items-center'>
        <img
          src='https://ssl.gstatic.com/onebox/media/sports/logos/Th4fAVAZeCJWRcKoLW7koA_96x96.png'
          alt='LaLiga'
        />
        <h3>LaLiga - Jornada 25</h3>
      </Container>

      {Object.entries(partidos).map(([mes, partidosMes]) => (
        <Container key={mes} className='d-flex flex-column flex-wrap mt-1'>
          <Row className='mt-4 mb-3'>
            <h2>{mes}</h2>
          </Row>
          <Row>
            {partidosMes.map((partido, index) => (
              <Col className='my-3' xs={12} md={6} lg={4} key={index}>
                <Partido {...partido} />
              </Col>
            ))}
          </Row>
        </Container>
      ))}

      <Container className='mt-auto text-center'>
        <span className='text-muted'>
          Ir a las clasificaciones <BsArrowRight />
        </span>
      </Container>
    </Container>
  )
}

export default SectionPartidos
