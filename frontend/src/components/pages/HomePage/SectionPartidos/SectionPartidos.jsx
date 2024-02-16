import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NewAdove from '@common/NewAdove/NewAdove'
import style from './SectionPartidos.module.scss'

const SectionPartidos = () => {
  return (
    <Container className={`${style.sectionPartidos} py-4`}>
      <Row className={`${style.partidosContainer} d-flex h-100`}>
        <Col md={8} className='d-flex flex-column'>
          <h3 className='mb-4'>Partidos</h3>
          <Row className='flex-grow-1'>
            <NewAdove
              imageUrl='https://via.placeholder.com/300'
              title='Partido 1'
              description='Descripción del Partido 1'
              informant='Informante'
              date='24/05/2023'
            />
          </Row>
        </Col>
        <Col>
          <Row className='h-100'>
            <NewAdove
              imageUrl='https://via.placeholder.com/300'
              title='Partido 2'
              description='Descripción del Partido 2'
              informant='Informante'
              date='24/05/2023'
            />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default SectionPartidos
